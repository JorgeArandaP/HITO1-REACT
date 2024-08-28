import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../pizzas";
import { useEffect, useState } from "react";

const Home = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const url = "http://localhost:5000/api/pizzas/";
    const response = await fetch(url);
    const data = await response.json();
    setInfo(data);
  };
  return (
    <>
      <div className="home">
        <Header />
        <div className="pizzas">
          {info.map((pizza) => (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              desc={pizza.desc}
              img={pizza.img}
              ingredients={pizza.ingredients}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
