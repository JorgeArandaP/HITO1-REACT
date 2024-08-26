import { Button } from "react-bootstrap";

const NavbarResponsive = () => {
  const total = 25000;
  const token = false;
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark p-2 px-3">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          Pizzeria Mamma Mia!
        </a>
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
                🍕 Home
              </Button>{" "}
            </li>
            <li className="nav-item">
              <Button
                type="button"
                className={token ? "mx-1 my-1" : "d-none"}
                variant="outline-light"
              >
                🔓 Profile
              </Button>{" "}
            </li>

            <li className="nav-item">
              <Button
                type="button"
                className={token ? "mx-1 my-1" : "d-none"}
                variant="outline-light"
              >
                🔒 Logout
              </Button>{" "}
            </li>

            <li className="nav-item">
              <Button
                type="button"
                className={token ? "d-none" : "mx-1 my-1"}
                variant="outline-light"
              >
                🔐 Login
              </Button>{" "}
            </li>

            <li className="nav-item">
              <Button
                type="button"
                className={token ? "d-none" : "mx-1 my-1"}
                variant="outline-light"
              >
                🔐 Register
              </Button>{" "}
            </li>
          </ul>
          <Button type="button" className="mx-1" variant="outline-warning">
            🛒 Total: ${total.toLocaleString("de-DE")}
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default NavbarResponsive;
