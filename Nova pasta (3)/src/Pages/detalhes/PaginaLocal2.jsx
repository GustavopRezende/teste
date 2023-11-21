import React from 'react';
import Local_2 from '../../Components/Locais/Local_2';
import '../css/style.css';
import { Link } from 'react-router-dom';

const PaginaLocal2 = () => {
  return (
    <div className='body-detalhado'>
      <div className="carta-detalhado">
        <Local_2 />
        <Link to="/feed" className='retorna'>
          <button className='retorna-btn'>Retornar</button>
        </Link>
      </div>
    </div>
  );
};

export default PaginaLocal2;
