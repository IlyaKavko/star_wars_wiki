import React from "react";
import DetailsInfo from "../DetailsInfo";
import "./PlanetPage.css";
import ErrorComponetn from "../ErrorComponent";
import Row from "../Row";
import PlanetList from "../PlanetList";
import SwapiContext from "../SwapiServiceContext/SwapiServiceContext";

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

    const itemList = (
      <PlanetList
        onItemClick={this.onPersonSelect}
        renderItem={(item) => item.name}
      />
    );

    const detailsInfo = (
      <DetailsInfo
        personId={this.state.sekectedPerson}
        getData={this.context.getPlanet}
        getInfo={["diameter", "population", "climate"]}
        getIMG={`https://starwars-visualguide.com/assets/img/planets/`}
      />
    );

    return (
      <div className="PeoplePage">
        <Row left={itemList} right={detailsInfo} />
      </div>
    );
  }
}
