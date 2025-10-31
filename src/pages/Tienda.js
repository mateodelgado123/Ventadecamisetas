import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';
import camisetasData from '../data/camisetasData';


function Tienda() {
  const { agregarAlCarrito } = useContext(CarritoContext);
  const location = useLocation();
  const busqueda = location.state?.busqueda?.toLowerCase() || '';

  const camisetasFiltradas = camisetasData.filter(camiseta =>
    camiseta.nombre.toLowerCase().includes(busqueda)
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Nuestra Tienda</h2>

      <div className="row">
        {camisetasFiltradas.map((camiseta) => (
          <div key={camiseta.id} className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100 text-center shadow-sm">
              <img
                src={camiseta.imagen}
                alt={camiseta.nombre}
                className="card-img-top mx-auto mt-3"
                style={{ maxHeight: '200px', objectFit: 'contain', width: 'auto' }}
              />
              <div className="card-body">
                <h5 className="card-title">{camiseta.nombre}</h5>
                <p className="card-text">${camiseta.precio}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => agregarAlCarrito(camiseta)}
                >
                  Añadir al carrito
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
