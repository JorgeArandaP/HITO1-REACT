import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Pizza = () => {
  const [info, setInfo] = useState();
  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const url = "http://localhost:5000/api/pizzas/p002/";
    const response = await fetch(url);
    const data = await response.json();
    setInfo(data);
    console.log(data);
  };
  console.log(info);
  return (
    <div>
      {info ? (
        <div className="pizzas">
          <Card className="card">
            <Card.Img variant="top" src={info.img} />
            <Card.Body>
              <Card.Title className="fs-4 text-body text-center">
                {info.name.charAt(0).toUpperCase() + info.name.slice(1)}
              </Card.Title>
              <hr></hr>
              <Card.Text className="fs-6 text-center text-secondary">
                {info.desc}
              </Card.Text>
              <Card.Text className="fs-5 text-center text-secondary">
                Ingredientes:
              </Card.Text>
              <Card.Text className="fs-6 text-center text-secondary">
                <ul>
                  {info.ingredients.map((ingrediente) => (
                    <li>🍕 {ingrediente}</li>
                  ))}
                </ul>
              </Card.Text>
              <hr></hr>
              <Card.Text className="fs-4 text-center">
                Precio: ${info.price.toLocaleString("de-DE")}
              </Card.Text>
              <div className="d-flex justify-content-around">
                <Button variant="outline-dark" size="sl">
                  Ver más 👀
                </Button>
                <Button variant="dark" size="sl">
                  Añadir 🛒
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <div class="d-flex justify-content-center home align-items-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pizza;
