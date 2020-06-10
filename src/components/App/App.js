import React from "react";
import "./App.css";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ItemsList from "../ItemsList";
import DetailsInfo from "../DetailsInfo";
import ErrorTest from "../errorTest";

class App extends React.Component {
  state = {
    isRandomPlanet: true,
    sekectedPerson: null,
  };

  componentDidCatch() {
    return (
      <div>Сломалось</div>
    )
  }

  onTogglePlanet = () => {
    this.setState((prevStatr) => {
      return {isRandomPlanet: !prevStatr.isRandomPlanet,}
    })
  }

  onPersonSelect = (id) => {
    this.setState({
      sekectedPerson: id,
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.isRandomPlanet && <RandomPlanet />}
        <button onClick={this.onTogglePlanet}>on/off planet</button>
        <ErrorTest />
        <div className="d-flex justify-content-between">
          <ItemsList onItemClick={this.onPersonSelect} />
          <DetailsInfo personId={this.state.sekectedPerson} />
        </div>
      </div>
    );
  }
}

export default App;
