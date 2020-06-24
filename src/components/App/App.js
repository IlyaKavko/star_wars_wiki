import React from "react";
import "./App.css";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorTest from "../errorTest";
import ErrorComponetn from "../ErrorComponent";
import PeoplePage from "../PeoplePage";
import SwapiServices from "../../services/SwapiServices";
import PlanetPage from "../PlanetPage";
import SwapiContext from "../SwapiServiceContext";
import StarshipsPage from "../StarshipsPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  swapi = new SwapiServices();

  state = {
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
      <SwapiContext.Provider value={this.swapi}>
        <Router>
          <div className="App">
            <Header />
            <RandomPlanet />
            <ErrorTest />
            <Route path="/" exact>
              <h2>Hi my diare friends</h2>
            </Route>
            <Route path="/people">
              <PeoplePage />
            </Route>
            <Route path="/planet">
              <PlanetPage />
            </Route>
            <Route path="/ships">
              <StarshipsPage />
            </Route>
          </div>
        </Router>
      </SwapiContext.Provider>
    );
  }
}

export default App;
