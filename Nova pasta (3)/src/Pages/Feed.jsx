import React from 'react';
import Local_1 from '../Components/Locais/L1/Local_1';
import Local_2 from '../Components/Locais/Local_2';
import Local_3 from '../Components/Locais/Local_3';
import './style.css'

const Feed = () => {
 return (
    <body className='body'>
    <div>
      <header className='titulo'>Feed</header>
      <div className='grid-container'>
        <div className='grid-item'><Local_1 /></div>
        <div className='grid-item'><Local_2 /></div>
        <div className='grid-item'><Local_3 /></div>
      </div>
    </div>
    </body>
 );
};

export default Feed;