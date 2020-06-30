import React from "react";
import ItemsList from "../ItemsList";
import DetailsInfo from "../DetailsInfo";
import "./PeoplePage.css";
import ErrorComponetn from "../ErrorComponent";
import SwapiContext from "../SwapiServiceContext/SwapiServiceContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class PeoplePage extends React.Component {
  static contextType = SwapiContext;

  state = {
    sekectedPerson: 1,
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
            <Route path="/people/info">
              <DetailsInfo
                personId={this.state.sekectedPerson}
                getData={this.context.getPerson}
                getInfo={["mass", "birthDate", "gender", "homeworld"]}
              />
            </Route>
          </Switch>

          
            <ItemsList
              onItemClick={this.onPersonSelect}
              renderItem={(item) => item.name}
            />
        </Router>
      </div>
    );
  }
}
