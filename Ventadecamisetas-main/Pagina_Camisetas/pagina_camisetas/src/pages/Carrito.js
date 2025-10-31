import React, { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";

function Carrito() {
  const { carrito, actualizarCantidad, eliminarProducto, vaciarCarrito } = useContext(CarritoContext);
  const [tarjeta, setTarjeta] = useState("");
  const [destino, setDestino] = useState("");
  const [compraFinalizada, setCompraFinalizada] = useState(false);

  const handleFinalizarCompra = () => {
    if (!tarjeta || !destino) {
      alert("Por favor completá todos los datos");
      return;
    }
    setCompraFinalizada(true);
    vaciarCarrito();
  };

  if (compraFinalizada) {
    return (
      <div className="container mt-4 text-center">
        <h1>¡Compra realizada con éxito!</h1>
        <p>Tu pedido será enviado a: {destino}</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Carrito de Compras</h1>
      {carrito.length === 0 ? (
        <p className="text-center">No hay productos en el carrito</p>
      ) : (
        <>
          <div className="row mb-4">
            {carrito.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card h-100 text-center shadow-sm">
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="card-img-top mx-auto mt-3"
                    style={{ maxHeight: "180px", objectFit: "contain", width: "auto" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">{item.precio}</p>
                    <input
                      type="number"
                      min="1"
                      value={item.cantidad}
                      onChange={(e) => actualizarCantidad(item.id, parseInt(e.target.value))}
                      className="form-control mb-2"
                    />
                    <button className="btn btn-danger" onClick={() => eliminarProducto(item.id)}>
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <h4>Datos de pago</h4>
            <input
              type="text"
              placeholder="Número de tarjeta"
              value={tarjeta}
              onChange={(e) => setTarjeta(e.target.value)}
              className="form-control mb-2"
            />
            <input
              type="text"
              placeholder="Destino"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
              className="form-control mb-2"
            />
            <button className="btn btn-success" onClick={handleFinalizarCompra}>
              Finalizar Compra
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrito;
