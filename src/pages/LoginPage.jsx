import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const LoginPage = () => {
  const { Login, email, password, setEmail, setPassword } =
    useContext(UserContext);

  return (
    <div className="home d-flex justify-content-end align-items-center homeformulario">
      <Form
        className="w-25 h-auto p-4 text-white border  border-warning rounded-5 formulario"
        onSubmit={Login}
      >
        <h1 className="mb-5 text-center">Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </Form.Group>
        <div className="mt-4 d-flex justify-content-center">
          <Button variant="outline-warning" type="submit" className="btn-lg">
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
