import React, { useState } from "react";
import Catalog from "./Catalog";
import Cart from "./Cart";
import OrderForm from "./OrderForm";

const Store = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevItems) => [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1
        }
      ]);
    }
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const submitOrder = (order) => {
    console.log("Pedido realizado:", order);
  };

  return (
    <div>
      <h1>Tienda en Línea</h1>
      <Catalog addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <OrderForm submitOrder={submitOrder} />
    </div>
  );
};

export default Store;
