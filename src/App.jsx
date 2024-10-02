import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Navigate } from "react-router-dom";
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
import CartProvider from "./contexts/CartContext";

import { UserContext } from "./contexts/UserContext";
import { useContext } from "react";

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="contenedor">
        <CartProvider>
          <NavbarResponsive />
          <Routes>
            <Route path="/PIZZERIA" element={<Home />} />
            <Route
              path="/PIZZERIA/profile"
              element={user ? <Profile /> : <Navigate to="/PIZZERIA/login" />}
            />
            <Route
              path="/PIZZERIA/register"
              element={user ? <Navigate to="/PIZZERIA" /> : <RegisterPage />}
            />
            <Route path="/PIZZERIA/cart" element={<Cart />} />
            <Route
              path="/PIZZERIA/login"
              element={
                user ? <Navigate to="/PIZZERIA/profile" /> : <LoginPage />
              }
            />
            <Route path="/PIZZERIA/pizza/:id" element={<Pizza />} />
            <Route path="/PIZZERIA/404" element={<NotFund />} />
          </Routes>
          <Footer />
        </CartProvider>
      </div>
    </>
  );
};

export default App;
