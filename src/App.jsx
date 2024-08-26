import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import NavbarResponsive from "./components/NavbarResponsive";
import "./App.css";
import Footer from "./components/Footer";
// import RegisterPage from "./components/RegisterPage";
// import LoginPage from "./components/LoginPage";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <div className="contenedor">
        <NavbarResponsive />
        {/* <Home /> */}
        <Cart />
        {/* <RegisterPage /> */}
        {/* <LoginPage /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
