import React from "react";
import "./App.css";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorTest from "../errorTest";
import ErrorComponetn from "../ErrorComponent";
import PeoplePage from "../PeoplePage";
import SwapiServices from "../../services/SwapiServices";
import ItemsList from "../ItemsList";
import DetailsInfo from "../DetailsInfo";

class App extends React.Component {
  swapi = new SwapiServices();

  state = {
    isRandomPlanet: true,
    error: false,
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  onTogglePlanet = () => {
    this.setState((prevStatr) => {
      return { isRandomPlanet: !prevStatr.isRandomPlanet };
    });
  };

  render() {
    if (this.state.error) {
      return <ErrorComponetn />;
    }

    return (
      <div className="App">
        <Header />
        {this.state.isRandomPlanet && <RandomPlanet />}
        <button onClick={this.onTogglePlanet}>on/off planet</button>
        <ErrorTest />
        <PeoplePage />
      </div>
    );
  }
}

export default App;
