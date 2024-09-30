import { Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { UserContext } from "../contexts/UserContext";

const Cart = () => {
  const { total, carro, Quitar, Agregar, Actualizar } = useContext(CartContext);
  Actualizar(carro);
  const { user } = useContext(UserContext);
  const token = user;

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
                        className="mx-2 btn btn-warning"
                        onClick={() => Agregar(pizza.id)}
                      >
                        Agregar
                      </Button>
                      <p className="mx-2 align-middle">
                        <strong>{pizza.quantity}</strong>
                      </p>
                      <Button
                        className="mx-2 btn btn-secondary"
                        onClick={() => Quitar(pizza.id)}
                      >
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
          <div
            className={token ? "d-flex justify-content-center mt-3" : "d-none"}
          >
            <Button className="fs-5 btn btn-success">Pagar</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
