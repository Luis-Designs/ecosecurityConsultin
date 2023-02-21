import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import style from './styles.module.css';

const Map = () => {
  return (
    <MapContainer
      center={[-7.218475, -79.432861]}
      zoom={16}
      scrollWheelZoom={false}
      className={style.contMap}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[-7.218475, -79.432861]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
