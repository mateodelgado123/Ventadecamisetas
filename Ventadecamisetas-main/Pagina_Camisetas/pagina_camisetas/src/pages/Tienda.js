import React, { useContext } from 'react';
import camisetas from '../assets/camisetasData';
import { CarritoContext } from '../context/CarritoContext';

function Tienda() {
  const { agregarAlCarrito } = useContext(CarritoContext);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Tienda de Camisetas</h1>
      <p className="text-center mb-5">
        Aquí encontrarás todas las camisetas disponibles de T-SHIRT SHOP ROJAS.
      </p>

      <div className="row">
        {camisetas.map((camiseta) => (
          <div key={camiseta.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100 text-center shadow-sm">
              <img
                src={camiseta.imagen}
                alt={camiseta.nombre}
                className="card-img-top mx-auto mt-3"
                style={{ maxHeight: '180px', objectFit: 'contain', width: 'auto' }}
              />
              <div className="card-body">
                <h5 className="card-title">{camiseta.nombre}</h5>
                <p className="card-text">{camiseta.precio}</p>
                <button className="btn btn-primary" onClick={() => agregarAlCarrito(camiseta)}>
                  Comprar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tienda;
