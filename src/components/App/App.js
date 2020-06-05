import React from "react";
import "./App.css";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ItemsList from "../ItemsList";
import DetailsInfo from "../DetailsInfo";

class App extends React.Component {
  state = {
    isRandomPlanet: true,
  };

  onTogglePlanet = () => {
    this.setState((prevStatr) => {
      return {isRandomPlanet: !prevStatr.isRandomPlanet,}
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.isRandomPlanet && <RandomPlanet />}
        <button onClick={this.onTogglePlanet}>on/off planet</button>
        <div className="d-flex justify-content-between">
          <ItemsList />
          <DetailsInfo />
        </div>
      </div>
    );
  }
}

export default App;
