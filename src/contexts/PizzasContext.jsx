import { Children, createContext, useState } from "react";
import { pizzas } from "../pizzas";

export const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(
    pizzas.map((pizza) => ({ ...pizza, quantity: 0 }))
  );
  return (
    <PizzasContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </PizzasContext.Provider>
  );
};

export default PizzasProvider;
