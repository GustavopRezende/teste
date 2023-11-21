import React from 'react';
import MapComponent from '../../Components/MapComponent'; // Importa o componente de mapa
import '../css/style.css';

const Primeiro = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Renderiza o componente de mapa */}
      <MapComponent />
    </div>
  );
};

export default Primeiro;