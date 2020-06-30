import React from "react";
import DetailsInfo from "../DetailsInfo";
import "./PlanetPage.css";
import ErrorComponetn from "../ErrorComponent";
import PlanetList from "../PlanetList";
import SwapiContext from "../SwapiServiceContext/SwapiServiceContext";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

export default class PlanetPage extends React.Component {
  static contextType = SwapiContext;

  state = {
    sekectedPerson: 3,
    error: false,
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  onPersonSelect = (id) => {
    this.setState({
      sekectedPerson: id,
    });
  };

  render() {
    if (this.state.error) {
      return <ErrorComponetn />;
    }

    return (
      <div className="PeoplePage">
        <Router>
          <Switch>
            <Route path="/planet/info">
              <DetailsInfo
                personId={this.state.sekectedPerson}
                getData={this.context.getPlanet}
                getInfo={["mass", "birthDate", "gender", "homeworld"]}
              />
            </Route>
          </Switch>

          <Link to="/planet/info">
            <PlanetList
              onItemClick={this.onPersonSelect}
              renderItem={(item) => item.name}
            />
          </Link>
        </Router>
      </div>
    );
  }
}
