import React from 'react';
import { Link } from 'react-router-dom';
import Local_1 from '../../Components/Locais/Local_1';
import Local_2 from '../../Components/Locais/Local_2';
import Local_3 from '../../Components/Locais/Local_3';
import '../css/style.css';
// ...imports e outras partes do código

const Feed = () => {
  return (
    <div className='feed'>
      <header className='titulo'>Feed</header>
      <div className='grid-container'>
        <div className='grid-item'>
          <Local_1 />
          <Link to="/feed/local1">
            <button className='leia-mais'>Leia Mais</button>
          </Link>
        </div>
        <div className='grid-item'>
          <Local_2 />
          <Link to="/feed/local2">
            <button className='leia-mais'>Leia Mais</button>
          </Link>
        </div>
        <div className='grid-item'>
          <Local_3 />
          <Link to="/feed/local3">
            <button className='leia-mais'>Leia Mais</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feed;
