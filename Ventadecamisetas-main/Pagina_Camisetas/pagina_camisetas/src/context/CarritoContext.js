import { createContext, useState } from "react";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto, cantidad = 1) => {
    const index = carrito.findIndex((p) => p.id === producto.id);
    if (index >= 0) {
      const nuevoCarrito = [...carrito];
      nuevoCarrito[index].cantidad += cantidad;
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad }]);
    }
  };

  const actualizarCantidad = (id, cantidad) => {
    const nuevoCarrito = carrito.map((p) =>
      p.id === id ? { ...p, cantidad } : p
    );
    setCarrito(nuevoCarrito);
  };

  const eliminarProducto = (id) => {
    setCarrito(carrito.filter((p) => p.id !== id));
  };

  const vaciarCarrito = () => setCarrito([]);

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, actualizarCantidad, eliminarProducto, vaciarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
