import React from 'react';
import Local_3 from '../../Components/Locais/Local_3';
import '../css/style.css';
import { Link } from 'react-router-dom';

const PaginaLocal3 = () => {
  return (
    <div className='body-detalhado'>
      <div className="carta-detalhado">
        <Local_3 />
        <Link to="/feed" className='retorna'>
          <button className='retorna-btn'>Retornar</button>
        </Link>
      </div>
    </div>
  );
};

export default PaginaLocal3;
