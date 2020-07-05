import React from "react";
import "./App.css";
import Header from "../Header";
import ErrorComponetn from "../ErrorComponent";
import SwapiServices from "../../services/SwapiServices";
import SwapiContext from "../SwapiServiceContext";
import { BrowserRouter } from "react-router-dom";
import AnimatedTransition from "../AnimatedTransition";
import Footer from "../Footer";

export default class App extends React.Component {
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
        <BrowserRouter>
          <div className="App">
            <Header />
            <AnimatedTransition />
            <Footer />
          </div>
        </BrowserRouter>
      </SwapiContext.Provider>
    );
  }
}
