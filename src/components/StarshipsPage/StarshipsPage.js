import React from "react";
import DetailsInfo from "../DetailsInfo";
import "./StarshipsPage.css";
import ErrorComponetn from "../ErrorComponent";
import StarshipsList from "../Starshipslist";
import SwapiContext from "../SwapiServiceContext/SwapiServiceContext";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

export default class StarshipsPage extends React.Component {
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
      <div className="StarshipsPage">
        <Router>
          <Switch>
            <Route path="/starships/info">
              <DetailsInfo
                personId={this.state.sekectedPerson}
                getData={this.context.getPerson}
                getInfo={["mass", "birthDate", "gender", "homeworld"]}
              />
            </Route>
          </Switch>

          <Link to="/starships/info">
            <StarshipsList
              onItemClick={this.onPersonSelect}
              renderItem={(item) => item.name}
            />
          </Link>
        </Router>
      </div>
    );
  }
}
