import React, { useState } from "react";

const OrderForm = ({ submitOrder }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    direccion: ""
  });

  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitOrder(formData);
  };

  return (
    <div>
      <h2>Formulario de Pedido</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" onChange={handleChange} />

        <label htmlFor="direccion">Dirección:</label>
        <input
          type="text"
          id="direccion"
          name="direccion"
          onChange={handleChange}
        />
        <button type="submit">Realizar Pedido</button>
      </form>
    </div>
  );
};

export default OrderForm;
