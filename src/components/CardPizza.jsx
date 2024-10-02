import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CardPizza = ({ name, price, ingredients, img, desc, id }) => {
  const { Agregar, Actualizar, carro } = useContext(CartContext);
  Actualizar(carro);
  const url = `pizza/${id.toLowerCase()}`;

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
        <ul>
          <Card.Text className="fs-6 text-center text-secondary">
            {ingredients.map((ingrediente, id) => (
              <li key={id}>🍕 {ingrediente}</li>
            ))}
          </Card.Text>
        </ul>
        <hr></hr>
        <Card.Text className="fs-4 text-center">
          Precio: ${price.toLocaleString("de-DE")}
        </Card.Text>
        <div className="d-flex justify-content-around">
          <Button variant="outline-dark" size="sl">
            <Link className="text-decoration-none text-dark" to={url}>
              Ver más 👀
            </Link>
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
