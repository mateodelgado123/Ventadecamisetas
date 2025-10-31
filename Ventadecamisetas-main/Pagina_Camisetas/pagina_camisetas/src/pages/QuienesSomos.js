import React from "react";

function QuienesSomos() {
  return (
    <div className="container mt-5 text-center quienes-somos">
      <h1 className="fw-bold mb-4">¿Quiénes somos?</h1>

      <p className="lead text-muted mb-5">
        <span className="text-primary fw-semibold">T-Shirt Shop Rojas</span> es  una pagina de ventas de ropa donde nuestra meta es que cada amante del futbol obtenga la camiseta que quiera a un buen precio
      </p>

      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title fw-bold text-primary">Nuestra Misión</h5>
              <p className="card-text text-muted">
                Brindar productos de excelente calidad a precios accesibles, 
                garantizando confianza y satisfacción en cada compra.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title fw-bold text-primary">Nuestra Visión</h5>
              <p className="card-text text-muted">
                Ser la tienda líder en venta de camisetas deportivas en Argentina, 
                reconocida por la innovación, el diseño y el compromiso con nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuienesSomos;
