import './App.css';
import LogoIMG from './assets/LogoPagina.png';
import LupaIMG from './assets/lupita_para_la_pagina-removebg-preview.png';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="navbar">
        {/* Contenedor izquierda: logo + botones */}
        <div className="nav-left">
          <div className="logo">
            <img src={LogoIMG} alt="Logo de la tienda" />
          </div>

          <div className="nav-links">
            <button>Inicio</button>
            <button>Contacto</button>
            <button>Quienes somos</button>
            <button>Tienda</button>
          </div>
        </div>

        {/* Lupa a la derecha */}
        <div className="search-button">
          <button>
            <img src={LupaIMG} alt="Buscar" />
          </button>
        </div>
      </header>

      {/* Contenido principal */}
      <h1>T-SHIRT SHOP ROJAS</h1>
      <p>
        T-SHIRT SHOP ROJAS es una página web donde podés encontrar las camisetas de fútbol de tu jugador,
        equipo o selección favorita a un buen precio para vos.
      </p>

      {/* Footer */}
      <footer>
        © 2025 T-SHIRT SHOP ROJAS. Todos los derechos reservados
      </footer>
    </div>
  );
}

export default App;
