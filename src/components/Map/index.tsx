import { MapContainer, TileLayer, Marker } from 'react-leaflet';

type Place = {
  id: string;
  name: string;
  slug: string;
  position: {
    latitude: number;
    longitude: number;
  };
};

export type MapProps = {
  places?: Place[];
};

const Map = ({ places }: MapProps) => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places?.map(({ id, name, position }) => {
        const { latitude, longitude } = position;

        return (
          <Marker
            key={`place-${id}`}
            title={name}
            position={[latitude, longitude]}
          />
        );
      })}
    </MapContainer>
  );
};

export default Map;
