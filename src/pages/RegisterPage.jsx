import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validarInput = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (password.trim().length < 6) {
      alert("Password debe contener mas de 6 caracteres");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords no coinciden");
      return;
    }
    alert("Registro exitoso!");
    setEmail("");
    setConfirmPassword("");
    setPassword("");
  };

  return (
    <div className="home d-flex justify-content-end align-items-center homeformulario">
      <Form
        className="w-25 p-4 text-white border  h-auto border-warning rounded-5 formulario"
        onSubmit={validarInput}
      >
        <h1 className="mb-5 text-center">Register</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            value={confirmPassword}
          />
        </Form.Group>
        <div className="mt-4 d-flex justify-content-center">
          <Button variant="outline-warning" type="submit" className="btn-lg">
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterPage;
