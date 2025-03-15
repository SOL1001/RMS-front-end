import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Leaflet
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface Property {
  latitude: number;
  longitude: number;
  title: string;
  price: number;
  city: string;
  address: string;
}

interface MapComponentProps {
  properties: Property[];
}

const MapComponent = ({ properties }: MapComponentProps) => {
  return (
    <MapContainer
      center={[9.02497, 38.74689]} // Default center (can be dynamic)
      zoom={13} // Default zoom level
      style={{ height: "400px", width: "100%" }}
    >
      {/* OpenStreetMap Tile Layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Markers for Properties */}
      {properties.map((property, index) => (
        <Marker
          key={index}
          position={[property.latitude, property.longitude]} // Use coordinates from data
          icon={defaultIcon}
        >
          <Popup>
            <div>
              <h3 className="font-bold">{property.title}</h3>
              <p>Price: ${property.price}</p>
              <p>
                Location: {property.city}, {property.address}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
