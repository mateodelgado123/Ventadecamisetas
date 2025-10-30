import React from 'react';
import Camiseta from '../assets/camiseta.png'; // imagen base
import '../App.css';

function Tienda() {
  // Array con 50 camisetas
  const camisetas = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    nombre: `Camiseta ${i + 1}`,
    precio: (14000 + i * 100).toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
    }),
    imagen: Camiseta,
  }));

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4"> Tienda de Camisetas</h1>
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
                style={{
                  maxHeight: '180px',
                  objectFit: 'contain',
                  width: 'auto',
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{camiseta.nombre}</h5>
                <p className="card-text">{camiseta.precio}</p>
                <button className="btn btn-primary">Comprar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tienda;

