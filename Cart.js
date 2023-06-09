import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <div>
              <span>{item.name} </span>
              <span>- ${item.price} </span>
              <span>- {item.quantity}</span>
              <button onClick={() => removeFromCart(index)}>
                Eliminar del carrito
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
