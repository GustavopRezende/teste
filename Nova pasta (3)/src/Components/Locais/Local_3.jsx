import React from 'react';
import L3 from './Img/L3.jpeg';
function Local_3() {
 return (
    <div className="carta">
      <div className="carta-image">
        <img src={L3} alt="Palacio Duque de Caxias" />
      </div>
      <div className="carta-contentudo">
        <h2 className='titulo-conteudo'>Palácio Duque de Caxias</h2>
        <h3>Praça Duque de Caxias, 25 - Centro</h3>
        <h4>Palácio histórico da Força Terreste Brasileira. </h4>
        <p>
        O edifício, erguido em 1906 e ampliado nos anos 1940, é uma imponente
        estrutura arquitetônica. Com 86 mil metros quadrados e 23 andares, 
        foi o maior prédio administrativo da época. Sua fachada de granito vermelho
        e preto é impressionante, destacando-se uma torre central de 13 andares e uma ala 
        lateral de seis. Internamente, utiliza mármores de diversas regiões do Brasil, combinados 
        com madeira nobre. Destacam-se um vitral gigante retratando o "Duque de Caxias em Itororó" 
        e bronzes representando a Glória Militar e a Apoteose à Bandeira.
        </p>
        <h3>Características:</h3>
        <ul>
          <li>Palco de eventos cruciais na história brasileira, desde a monarquia até a República.</li>
          <li>Inaugurado em 1910 e ampliado nos anos 1940 para centralizar a administração do Exército.</li>
          <li>Ocupado pelo Comando Militar do Leste, pela 1ª Região Militar, pelo Departamento de Ensino e Pesquisa, pelo Arquivo Histórico do Exército, entre outros órgãos administrativos.</li>
        </ul>
      </div>
    </div>
 );
}

export default Local_3;