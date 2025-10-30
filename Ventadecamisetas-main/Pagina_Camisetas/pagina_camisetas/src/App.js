import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoIMG from './assets/LogoPagina.png';
import LupaIMG from './assets/lupita_para_la_pagina-removebg-preview.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import CamisetaArgentina from './assets/camiseta_argentina.png';
import CamisetaBoca from './assets/camiseta_boca.png';
import CamisetaRiver from './assets/camiseta_river.png';

import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import QuienesSomos from './pages/QuienesSomos';
import Tienda from './pages/Tienda';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <header className="navbar p-2 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="logo me-3">
              <img src={LogoIMG} alt="Logo de la tienda" />
            </div>

            <div className="nav-links">
              <Link to="/" className="btn btn-outline-primary me-2">Inicio</Link>
              <Link to="/contacto" className="btn btn-outline-primary me-2">Contacto</Link>
              <Link to="/quienes-somos" className="btn btn-outline-primary me-2">Quienes somos</Link>
              <Link to="/tienda" className="btn btn-outline-primary">Tienda</Link>
            </div>
          </div>

          <div className="search-button">
            <button className="btn btn-outline-secondary">
              <img src={LupaIMG} alt="Buscar" style={{ height: '25px' }} />
            </button>
          </div>
        </header>

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/tienda" element={<Tienda />} />
        </Routes>

        {/* Sección de camisetas promocionadas */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          marginTop: '40px',
          gap: '40px'
        }}>
          <img src={CamisetaArgentina} alt="Camiseta Argentina" style={{ width: '150px', borderRadius: '10px', cursor: 'pointer' }} />
          <img src={CamisetaBoca} alt="Camiseta Boca" style={{ width: '150px', borderRadius: '10px', cursor: 'pointer' }} />
          <img src={CamisetaRiver} alt="Camiseta River" style={{ width: '150px', borderRadius: '10px', cursor: 'pointer' }} />
        </div>

        {/* Footer */}
        <footer className="text-center py-3 mt-5 bg-light">
          © 2025 T-SHIRT SHOP ROJAS. Todos los derechos reservados
        </footer>
      </div>
    </Router>
  );
}

export default App;
