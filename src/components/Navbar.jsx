import { Button } from "react-bootstrap";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <div className="d-flex justify-content-between navbar  text-white p-2 px-3">
      <div className="d-flex justify-content-start">
        <p className="m-0 d-flex align-items-center mx-3">
          Pizzeria Mamma Mia!
        </p>
        <Button type="button" className="mx-1" variant="outline-light">
          🍕 Home
        </Button>{" "}
        <Button
          type="button"
          className={token ? "mx-1" : "d-none"}
          variant="outline-light"
        >
          🔓 Profile
        </Button>{" "}
        <Button
          type="button"
          className={token ? "mx-1" : "d-none"}
          variant="outline-light"
        >
          🔒 Logout
        </Button>{" "}
        <Button
          type="button"
          className={token ? "d-none" : "mx-1"}
          variant="outline-light"
        >
          🔐 Login
        </Button>{" "}
        <Button
          type="button"
          className={token ? "d-none" : "mx-1"}
          variant="outline-light"
        >
          🔐 Register
        </Button>{" "}
      </div>
      <div>
        <Button type="button" className="mx-1" variant="outline-warning">
          🛒 Total: ${total.toLocaleString("de-DE")}
        </Button>{" "}
      </div>
    </div>
  );
};

export default Navbar;
