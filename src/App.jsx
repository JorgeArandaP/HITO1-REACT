import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import RegisterPage from "./pages/RegisterPage";
import Cart from "./pages/Cart";
import LoginPage from "./pages/LoginPage";
import NotFund from "./pages/NotFund";
import NavbarResponsive from "./components/NavbarResponsive";
import Pizza from "./pages/Pizza";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="contenedor">
        <NavbarResponsive />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/404" element={<NotFund />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
