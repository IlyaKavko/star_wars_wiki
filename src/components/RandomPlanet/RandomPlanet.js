import React from "react";

import SwapiService from "../../services/SwapiServices";
import "./RandomPlanet.css";
import PlanetIMG from "./PlanetIMG/planet1.png";

export default class RandomPlanet extends React.Component {
  constructor() {
    super();
    this.updatePlanet();
  }

  swapi = new SwapiService();

  state = {
    name: null,
    diameter: null,
    population: null,
    climate: null,
  };

  updatePlanet() {
    this.swapi.getPlanet(2).then((planet) => {
      this.setState({
        name: planet.name,
        diameter: planet.diameter,
        population: planet.population,
        climate: planet.climate,
      });
    });
  }

  render() {
    const { name, diameter, population, climate } = this.state;

    return (
      <div className="RandomPlanet">
        <h3>{name}</h3>
        <div className="planet_block d-flex">
          <img src={PlanetIMG} alt="planet" />
          <ul className="planet_info_block">
            <li>
              <span>Diameter</span>
              <span>{diameter}</span>
            </li>
            <li>
              <span>Population</span>
              <span>{population}</span>
            </li>
            <li>
              <span>Climate</span>
              <span>{climate}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
