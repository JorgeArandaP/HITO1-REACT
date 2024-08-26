import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../pizzas";

const Home = () => {
  return (
    <>
      <div className="home">
        <Header />
        <div className="pizzas">
          {pizzas.map((pizza) => (
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
