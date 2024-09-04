import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarResponsive = () => {
  const total = 25000;
  const token = false;
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark p-2 px-3">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          Pizzeria Mamma Mia!
        </Link>
        <Button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </Button>{" "}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Button
                type="button"
                className="mx-1 my-1"
                variant="outline-light"
              >
                <Link to="/" className="text-decoration-none text-white">
                  🍕 Home
                </Link>
              </Button>{" "}
            </li>
            <li className="nav-item">
              <Button
                type="button"
                className={token ? "mx-1 my-1" : "d-none"}
                variant="outline-light"
              >
                <Link to="/profile" className="text-decoration-none text-white">
                  🔓 Profile
                </Link>
              </Button>{" "}
            </li>

            <li className="nav-item">
              <Button
                type="button"
                className={token ? "mx-1 my-1" : "d-none"}
                variant="outline-light"
              >
                <Link to="/" className="text-decoration-none text-white">
                  🔒 Logout
                </Link>
              </Button>{" "}
            </li>

            <li className="nav-item">
              <Button
                type="button"
                className={token ? "d-none" : "mx-1 my-1"}
                variant="outline-light"
              >
                <Link to="/login" className="text-decoration-none text-white">
                  🔐 Login
                </Link>
              </Button>{" "}
            </li>

            <li className="nav-item">
              <Button
                type="button"
                className={token ? "d-none" : "mx-1 my-1"}
                variant="outline-light"
              >
                <Link
                  to="/register"
                  className="text-decoration-none text-white"
                >
                  🔐 Register
                </Link>
              </Button>{" "}
            </li>
          </ul>
          <Button type="button" className="mx-1" variant="outline-warning">
            <Link to="/cart" className="text-decoration-none text-warning">
              🛒 Total: ${total.toLocaleString("de-DE")}
            </Link>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default NavbarResponsive;
