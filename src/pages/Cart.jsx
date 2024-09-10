import { Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const { total, carro, Quitar, Agregar, Actualizar } = useContext(CartContext);
  Actualizar(carro);

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
                  <strong>Total: ${total.toLocaleString("de-DE")}</strong>
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
