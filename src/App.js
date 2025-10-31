import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import LogoIMG from './assets/LogoPagina.png';
import LupaIMG from './assets/lupita_para_la_pagina-removebg-preview.png';

import Inicio from './pages/Inicio';
import Tienda from './pages/Tienda';
import Contacto from './pages/Contacto';
import Carrito from './pages/Carrito';
import QuienesSomos from './pages/QuienesSomos';

import { CarritoProvider } from './context/CarritoContext';

function App() {
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();

  const handleBuscar = () => {
    
    navigate('/tienda', { state: { busqueda } });
  };

  return (
    <CarritoProvider>
      <div className="App">
        {/* Header */}
        <header className="navbar p-2 d-flex align-items-center justify-content-between bg-light shadow-sm">
          <div className="d-flex align-items-center">
            {/* Logo */}
            <div className="logo me-3">
              <img src={LogoIMG} alt="Logo de la tienda" style={{ height: '80px', width: 'auto' }} />
            </div>

            {/* Links de navegación */}
            <div className="nav-links me-3">
              <Link to="/" className="btn btn-outline-primary me-2">Inicio</Link>
              <Link to="/tienda" className="btn btn-outline-primary me-2">Tienda</Link>
              <Link to="/contacto" className="btn btn-outline-primary me-2">Contacto</Link>
              <Link to="/quienes-somos" className="btn btn-outline-primary me-2">Quienes somos</Link>
              <Link to="/carrito" className="btn btn-outline-primary">Carrito</Link>
            </div>
          </div>

          {/* Buscador con lupa */}
          <div className="d-flex align-items-center">
            <input
              type="text"
              placeholder="Buscar..."
              className="form-control me-2"
              style={{ width: '200px' }}
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleBuscar()}
            />
            <button className="btn btn-outline-secondary" onClick={handleBuscar}>
              <img src={LupaIMG} alt="Buscar" style={{ height: '25px' }} />
            </button>
          </div>
        </header>

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
        </Routes>

        {/* Footer */}
        <footer className="text-center py-3 mt-5 bg-light">
          © 2025 T-SHIRT SHOP ROJAS. Todos los derechos reservados
        </footer>
      </div>
    </CarritoProvider>
  );
}


export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
