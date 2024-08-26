import { Button } from "react-bootstrap";
import { pizzas } from "../pizzas";
import { useState } from "react";

const Cart = () => {
  const carroInicial = pizzas.map((pizza) => ({ ...pizza, quantity: 0 }));
  const [carro, setCarro] = useState(carroInicial);
  const Agregar = (pizzaId) => {
    setCarro(
      carro.map((pizza) =>
        pizza.id === pizzaId
          ? { ...pizza, quantity: pizza.quantity + 1 }
          : pizza
      )
    );
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

  const Total = carro.reduce(
    (acc, pizza) => acc + pizza.price * pizza.quantity,
    0
  );
  return (
    <>
      <div className="home d-flex justify-content-center align-items-center">
        <div className="cart">
          <h1>Carrito de Compras</h1>

          <table className="table">
            <tbody>
              {carro.map((pizza) => (
                <tr>
                  <td className="d-flex justify-content-start align-items-center">
                    <img className="imagenCart" src={pizza.img}></img>
                    <div className="mx-3">
                      <p className="m-0">{pizza.name}</p>
                      <p className="m-0">
                        <strong>${pizza.price.toLocaleString("de-DE")}</strong>
                      </p>
                    </div>
                  </td>
                  <td className="align-middle">
                    <div className="d-flex justify-content-end ">
                      <Button
                        className="mx-2"
                        onClick={() => Agregar(pizza.id)}
                      >
                        Agregar
                      </Button>
                      <p className="mx-2 align-middle">
                        <strong>{pizza.quantity}</strong>
                      </p>
                      <Button className="mx-2" onClick={() => Quitar(pizza.id)}>
                        Quitar
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
              <tr>
                <td className="text-center">
                  <strong>Total: ${Total.toLocaleString("de-DE")}</strong>
                </td>
                <td className="text-center"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cart;
