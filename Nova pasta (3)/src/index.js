import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Primeiro from './Pages/Principais/Primeiro';
import reportWebVitals from './reportWebVitals';
import Feed from './Pages/Principais/Feed'
import PaginaLocal1 from './Pages/detalhes/PaginaLocal1';
import PaginaLocal2 from './Pages/detalhes/PaginaLocal2';
import PaginaLocal3 from './Pages/detalhes/PaginaLocal3';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Primeiro />} />
        <Route path="feed" element={<Feed />} />
        <Route path="feed/local1" element={<PaginaLocal1 />} />
        <Route path="feed/local2" element={<PaginaLocal2 />} />
        <Route path="feed/local3" element={<PaginaLocal3 />} />
      </Routes>
    </BrowserRouter>
 </React.StrictMode>
);

reportWebVitals();