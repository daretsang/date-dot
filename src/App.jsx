import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';

function App() {
  // Coordinates for Richmond, BC [Lat, Long]
  const position = [49.1666, -123.1336];

  const dateSpots = [
    { id: 1, name: "Steveston Village", pos: [49.1251, -123.1813], note: "Great for a sunset walk!" },
    { id: 2, name: "Richmond Night Market", pos: [49.1931, -123.1311], note: "Amazing food, very busy." }
  ];

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <h1>DateDot: Our Spots</h1>
      <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{ height: '80vh', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {dateSpots.map(spot => (
          <Marker key={spot.id} position={spot.pos}>
            <Popup>
              <strong>{spot.name}</strong> <br /> {spot.note}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;