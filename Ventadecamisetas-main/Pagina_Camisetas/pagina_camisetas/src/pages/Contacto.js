import React, { useState } from "react";

function Contacto() {
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // evita que la página se recargue
    setMensajeEnviado(true);

    // opcional: limpiar el formulario
    e.target.reset();

    // ocultar la notificación después de 3 segundos
    setTimeout(() => {
      setMensajeEnviado(false);
    }, 3000);
  };

  return (
    <div className="contacto-container mx-auto mt-5 mb-5 p-4 rounded shadow bg-light" style={{ maxWidth: "600px" }}>
      <h2 className="text-center mb-4">Contacto</h2>
      <p className="text-center text-muted">
        Si tenés dudas o querés hacer un pedido personalizado, completá el siguiente formulario o escribinos a{" "}
        <strong>tiendacamisetas@gmail.com</strong>
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3 text-start">
          <label className="form-label">Nombre completo</label>
          <input type="text" className="form-control" placeholder="Tu nombre" required />
        </div>

        <div className="mb-3 text-start">
          <label className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" placeholder="tuemail@gmail.com" required />
        </div>

        <div className="mb-3 text-start">
          <label className="form-label">Mensaje</label>
          <textarea className="form-control" rows="4" placeholder="Escribí tu mensaje..." required></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Enviar mensaje
        </button>
      </form>

      {/* Notificación */}
      {mensajeEnviado && (
        <div className="alert alert-success mt-3 text-center" role="alert">
          ¡Mensaje enviado correctamente!
        </div>
      )}
    </div>
  );
}

export default Contacto;
