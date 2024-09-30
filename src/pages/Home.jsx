import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { pizzas } from "../pizzas";
import { useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

const Home = () => {
  const { carro } = useContext(CartContext);

  return (
    <>
      <div className="home">
        <Header />
        <div className="pizzas">
          {carro.map((pizza) => (
            <CardPizza
              key={pizza.id}
              id={pizza.id}
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
