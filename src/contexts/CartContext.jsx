import { createContext, useState, useEffect } from "react";
import { pizzas } from "../pizzas";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [carro, setCarro] = useState(
    pizzas.map((pizza) => ({ ...pizza, quantity: 0 }))
  );

  const Actualizar = (carro) => {
    setTotal(
      carro.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0)
    );
  };

  const Agregar = (pizzaId) => {
    setCarro(
      carro.map((pizza) =>
        pizza.id === pizzaId
          ? { ...pizza, quantity: pizza.quantity + 1 }
          : pizza
      )
    );
  };

  const token = localStorage.getItem("token");
  const Checkout = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        cart: carro,
      }),
    });
    alert("Compra realizada con exito!");
    setCarro(pizzas.map((pizza) => ({ ...pizza, quantity: 0 })));
  };

  const Quitar = (pizzaId) => {
    setCarro(
      carro.map((pizza) =>
        pizza.id === pizzaId && pizza.quantity > 0
          ? { ...pizza, quantity: pizza.quantity - 1 }
          : pizza
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        total,
        setTotal,
        carro,
        Agregar,
        Quitar,
        Actualizar,
        Checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
