import React from 'react';
import Camiseta from '../assets/camiseta.png';

function Inicio() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-3">T-SHIRT SHOP ROJAS</h1>
      <p className="text-center mb-5">
        T-SHIRT SHOP ROJAS es una página web donde podés encontrar las camisetas de fútbol de tu jugador,
        equipo o selección favorita a un buen precio para vos.
      </p>

      {/* Tarjetas de camisetas */}
      <div className="row justify-content-center">
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card h-100 text-center">
            <img src={Camiseta} className="card-img-top mx-auto mt-3" alt="Camiseta Argentina" style={{ maxHeight: '200px', objectFit: 'contain', width: 'auto' }} />
            <div className="card-body">
              <h5 className="card-title">Camiseta Argentina</h5>
              <p className="card-text">$15.000</p>
              <button className="btn btn-primary">Comprar</button>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card h-100 text-center">
            <img src={Camiseta} className="card-img-top mx-auto mt-3" alt="Camiseta Brasil" style={{ maxHeight: '200px', objectFit: 'contain', width: 'auto' }} />
            <div className="card-body">
              <h5 className="card-title">Camiseta Brasil</h5>
              <p className="card-text">$14.000</p>
              <button className="btn btn-primary">Comprar</button>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card h-100 text-center">
            <img src={Camiseta} className="card-img-top mx-auto mt-3" alt="Camiseta Francia" style={{ maxHeight: '200px', objectFit: 'contain', width: 'auto' }} />
            <div className="card-body">
              <h5 className="card-title">Camiseta Francia</h5>
              <p className="card-text">$15.500</p>
              <button className="btn btn-primary">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;

