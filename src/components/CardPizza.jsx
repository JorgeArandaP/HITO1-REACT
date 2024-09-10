import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

const CardPizza = ({ name, price, ingredients, img, desc, id }) => {
  const { Agregar, Actualizar, carro } = useContext(CartContext);
  Actualizar(carro);

  return (
    <Card className="card">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="fs-4 text-body text-center">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Card.Title>
        <hr></hr>
        <Card.Text className="fs-6 text-center text-secondary">
          {desc}
        </Card.Text>
        <Card.Text className="fs-5 text-center text-secondary">
          Ingredientes:
        </Card.Text>
        <Card.Text className="fs-6 text-center text-secondary">
          <ul>
            {ingredients.map((ingrediente) => (
              <li>🍕 {ingrediente}</li>
            ))}
          </ul>
        </Card.Text>
        <hr></hr>
        <Card.Text className="fs-4 text-center">
          Precio: ${price.toLocaleString("de-DE")}
        </Card.Text>
        <div className="d-flex justify-content-around">
          <Button variant="outline-dark" size="sl">
            Ver más 👀
          </Button>
          <Button variant="dark" size="sl" onClick={() => Agregar(id)}>
            Añadir 🛒
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
