import React from 'react';
import L2 from './Img/L2.jpeg';
import './style.css';
function Local_2() {
 return (
    <div className="carta">
      <div className="carta-image">
        <img src={L2} alt="Edificio Francisco Serrador" />
      </div>
      <div className="carta-contentudo">
        <h2 className='titulo-conteudo'>Edificio Francisco Serrador</h2>
        <h3>Rua Álvaro Alvim, 14 - Centro</h3>
        <h4>Antigo hotel grandioso e luxuoso de Cinelândia</h4>
        <p>
        O Edifício Serrador é um marco na Cinelândia e 
        representa uma era passada de grandeza e prestígio.
        Originalmente, era o lar do Hotel Serrador, inaugurado
        na década de 1940 como o maior hotel da América Latina.
        Com o passar dos anos, o prédio passou por diferentes fases,
        desde seu abandono por mais de uma década até a sua reforma 
        para abrigar as empresas de Eike Batista.
        </p>
        <h3>Características:</h3>
        <ul>
          <li>O Edifício Serrador possui características arquitetônicas marcantes da década de 1940, refletindo o glamour e a estética da época.</li>
          <li>Após a reforma para abrigar as empresas de Eike Batista, o edifício foi modernizado para atender às necessidades contemporâneas, preservando sua estrutura original em meio a essas mudanças.</li>
          <li> Sua posição na Cinelândia o torna um ponto de referência na área, cercado por outros prédios históricos e teatros importantes, refletindo o rico cenário cultural do Rio de Janeiro.</li>
        </ul>
      </div>
      
    </div>
 );
}

export default Local_2;