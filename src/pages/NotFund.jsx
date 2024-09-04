import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container className="home d-flex justify-content-center align-items-center text-center">
      <div>
        <h1 className="mb-4">
          Lo sentimos 😕, la ruta que intentas consultar no existe!{" "}
        </h1>
        <Button
          type="button"
          className="mx-1 my-1 widht-auto fs-4 border"
          variant="outline-warning"
        >
          <Link to="/" className="text-decoration-none text-dark">
            Volver al Inicio 🍕
          </Link>
        </Button>{" "}
      </div>
    </Container>
  );
};
export default NotFound;
