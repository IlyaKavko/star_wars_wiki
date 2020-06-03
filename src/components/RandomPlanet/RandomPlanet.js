import React from "react";

import SwapiService from "../../services/SwapiServices";
import "./RandomPlanet.css";
import Loader from "../Loader";

export default class RandomPlanet extends React.Component {
  constructor() {
    super();
    this.updatePlanet();
  }

  swapi = new SwapiService();

  state = {
    planet: {},
    load: true,
  };

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      load: false,
    });
  };

  updatePlanet() {
    const id = Math.round(Math.random() * 20);
    this.swapi.getPlanet(id).then(this.onPlanetLoaded);
  }

  render() {
    const {
      planet: { name, diameter, population, climate, id, load },
    } = this.state;

    if (load) {
      return <Loader />;
    }

    return (
      <div className="RandomPlanet">
        <h3>{name}</h3>
        <div className="planet_block d-flex">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            alt="planet"
          />
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
