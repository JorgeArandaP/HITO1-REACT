import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";

const Profile = () => {
  const [user, setUser] = useState(null);
  const { Logout } = useContext(UserContext);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUser(data));
    }
  }, []);
  return (
    <Container className="home d-flex justify-content-center align-items-center text-center">
      {user ? (
        <div>
          <h2 className="mb-4">{user.email}</h2>
          <Button
            type="button"
            className="mx-1 my-1 widht-auto fs-5"
            variant="outline-dark"
            onClick={Logout}
          >
            Cerrar sesión
          </Button>{" "}
        </div>
      ) : (
        <div>Please login to view your profile.</div>
      )}
    </Container>
  );
};
export default Profile;
