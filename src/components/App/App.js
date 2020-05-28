import React from "react";
import SwapiServices from "../../services/SwapiServices";

const App = () => {
  const swapi = new SwapiServices();

  swapi.getPerson(5).then((body) => {
    console.log(body);
  });

  swapi.getStarships(3).then((body) => {
      console.log(body);
  });

  swapi.getPlanet(4).then((body) => {
      console.log(body);
  });

  console.log("app");

  return <div>Heder</div>;
};

export default App;
