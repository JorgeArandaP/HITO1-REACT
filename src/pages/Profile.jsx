import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Profile = () => {
  return (
    <Container className="home d-flex justify-content-center align-items-center text-center">
      <div>
        <h2 className="mb-4">usuario@mail.com</h2>
        <Button
          type="button"
          className="mx-1 my-1 widht-auto fs-5"
          variant="outline-dark"
        >
          Cerrar sesión
        </Button>{" "}
      </div>
    </Container>
  );
};
export default Profile;
