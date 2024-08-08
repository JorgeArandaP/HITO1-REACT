import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card style={{ width: "25rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="fs-4 text-body">Pizza {name}</Card.Title>
        <hr></hr>
        <Card.Text className="fs-5 text-center text-secondary">
          Ingredientes:
        </Card.Text>
        <Card.Text className="fs-6 text-center text-secondary">
          🍕 {ingredients.join(", ")}
        </Card.Text>
        <hr></hr>
        <Card.Text className="fs-4 text-center">
          Precio: ${price.toLocaleString("de-DE")}
        </Card.Text>
        <div className="d-flex justify-content-around">
          <Button variant="outline-dark" size="sm">
            Ver más 👀
          </Button>
          <Button variant="dark" size="sm">
            Añadir 🛒
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
