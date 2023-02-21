import Head from 'next/head';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import style from './styles.module.css';

const Map = () => {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://unpkg.com/leaflet@1.9.3/dist/leaflet.css'
          integrity='sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI='
          crossOrigin='anonymous'
        />
        <script
          src='https://unpkg.com/leaflet@1.9.3/dist/leaflet.js'
          integrity='sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM='
          crossOrigin=''
        ></script>
      </Head>
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
    </>
  );
};

export default Map;
