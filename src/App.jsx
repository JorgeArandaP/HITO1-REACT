import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import "./App.css";
import Footer from "./components/Footer";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <>
      <div className="contenedor">
        <Navbar />
        {/* <Home /> */}
        <RegisterPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
