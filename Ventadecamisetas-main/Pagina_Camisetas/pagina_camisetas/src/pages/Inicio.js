import React from 'react';
import ArgentinaIMG from '../assets/argentina.webp';
import BocaIMG from '../assets/boca25.webp';
import RiverIMG from '../assets/river.webp';

function Inicio() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-3">T-SHIRT SHOP ROJAS</h1>
      <p className="text-center mb-5">
        T-SHIRT SHOP ROJAS es una página web donde podés encontrar las camisetas de fútbol de tu equipo o selección favorita.
      </p>

      <div className="row justify-content-center">
        {/* Camiseta Argentina */}
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card h-100 text-center shadow-sm">
            <img
              src={ArgentinaIMG}
              alt="Camiseta Argentina"
              className="card-img-top mx-auto mt-3"
              style={{ maxHeight: '200px', objectFit: 'contain', width: 'auto' }}
            />
            <div className="card-body">
              <h5 className="card-title">Camiseta Argentina</h5>
            </div>
          </div>
        </div>

        {/* Camiseta Boca */}
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card h-100 text-center shadow-sm">
            <img
              src={BocaIMG}
              alt="Camiseta Boca"
              className="card-img-top mx-auto mt-3"
              style={{ maxHeight: '200px', objectFit: 'contain', width: 'auto' }}
            />
            <div className="card-body">
              <h5 className="card-title">Camiseta Boca</h5>
            </div>
          </div>
        </div>

        {/* Camiseta River */}
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card h-100 text-center shadow-sm">
            <img
              src={RiverIMG}
              alt="Camiseta River"
              className="card-img-top mx-auto mt-3"
              style={{ maxHeight: '200px', objectFit: 'contain', width: 'auto' }}
            />
            <div className="card-body">
              <h5 className="card-title">Camiseta River</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;

