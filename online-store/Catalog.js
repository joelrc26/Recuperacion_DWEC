import React, { useEffect, useState } from "react";
import productos from "./productos.json";

const Catalog = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productos);
  }, []);

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <span>{product.name} </span>
              <span>- ${product.price}</span>
              <button onClick={() => addToCart(product)}>
                Agregar al carrito
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
