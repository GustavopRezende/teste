import React from 'react';
import Local_1 from '../../Components/Locais/Local_1';
import '../css/style.css';
import { Link } from 'react-router-dom';

const PaginaLocal1 = () => {
  return (
    <div className='body-detalhado'>
      <div className="carta-detalhado">
        <Local_1 />
        <Link to="/feed" className='retorna'>
          <button className='retorna-btn'>Retornar</button>
        </Link>
      </div>
    </div>
  );
};

export default PaginaLocal1;
