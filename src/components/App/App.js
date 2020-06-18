import React from "react";
import "./App.css";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorTest from "../errorTest";
import ErrorComponetn from "../ErrorComponent";
import PeoplePage from "../PeoplePage";
import SwapiServices from "../../services/SwapiServices";
import PlanetPage from "../PlanetPage";
import { SwapiProvider } from "../SwapiServiceContext/SwapiServiceContext";
import StarshipsPage from "../StarshipsPage";

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

  render() {
    if (this.state.error) {
      return <ErrorComponetn />;
    }

    return (
      <SwapiProvider value={this.swapi}>
        <div className="App">
          <Header />
          <RandomPlanet />
          <ErrorTest />
          <PeoplePage />
          <PlanetPage />
          <StarshipsPage />
        </div>
      </SwapiProvider>
    );
  }
}

export default App;
