import React from "react";

import "./RandomPlanet.css";
import Loader from "../Loader";
import ErrorComponetn from "../ErrorComponent";
import SwapiContext from "../SwapiServiceContext";

export default class RandomPlanet extends React.Component {
  static contextType = SwapiContext;

  state = {
    planet: {},
    load: true,
    error: false,
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      load: false,
    });
  };

  onError = () => {
    this.setState({
      error: true,
      load: false,
    });
  };

  updatePlanet = () => {
    const id = Math.round(Math.random() * 10);
    this.context.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
  };

  render() {
    const { planet, load, error } = this.state;

    const errorContent = error ? <ErrorComponetn /> : null;
    const loader = load ? <Loader /> : null;
    const content = !load && !error ? <PlanetView planet={planet} /> : null;

    return (
      <div className="RandomPlanet">
        {errorContent}
        {loader}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, diameter, climate, population } = planet;
  return (
    <>
      <h3>{name}</h3>
      <div className="planet_block d-flex">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          onError={(e) => {
            e.target.src =
              "https://starwars-visualguide.com/assets/img/placeholder.jpg";
          }}
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
    </>
  );
};
