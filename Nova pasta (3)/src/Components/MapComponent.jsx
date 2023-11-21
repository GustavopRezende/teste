import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Importe o Leaflet

import customIcon from './—Pngtree—location vector icon_3722521.png'; // Importe a imagem personalizada

const MapComponent = () => {
  const initialPosition = [-22.935361, -43.215756];
  const markers = [
    { position: [-22.935361, -43.215756], text: 'local 1' },
    { position: [-22.930000, -43.210000], text: 'Marcador 2' },
    { position: [-22.925000, -43.205000], text: 'Marcador 3' },
  ];

  // Crie um ícone personalizado
  const customMarkerIcon = L.icon({
    iconUrl: customIcon,
    iconSize: [32, 32], // Defina o tamanho da imagem
    iconAnchor: [16, 32], // Defina o ponto de ancoragem
  });

  return (
    <MapContainer center={initialPosition} zoom={13} style={{ height: '100vh', width: '100vw' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={customMarkerIcon}>
          <Popup>{marker.text}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;