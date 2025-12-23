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
    <div className="app-wrapper">
      <header className="map-header">
        <h1>DateDot: Our Spots</h1>
        <a href="/chart.html" className="chart-button">
          View Relationship Timeline 📅
        </a>
      </header>

      <MapContainer
        center={position}
        zoom={12}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {dateSpots.map((spot) => (
          <Marker key={spot.id} position={spot.pos}>
            <Popup>
              <strong>{spot.name}</strong> <br />
              {spot.note}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;