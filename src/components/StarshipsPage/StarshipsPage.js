import React from "react";
import DetailsInfo from "../DetailsInfo";
import "./StarshipsPage.css";
import ErrorComponetn from "../ErrorComponent";
import SwapiServices from "../../services/SwapiServices";
import Row from "../Row";
import StarshipsList from "../Starshipslist";

export default class StarshipsPage extends React.Component {
  swapi = new SwapiServices();

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
      <StarshipsList
        onItemClick={this.onPersonSelect}
        getData={this.swapi.getAllPlanet}
        renderItem={(item) => item.name}
      />
    );

    const detailsInfo = <DetailsInfo personId={this.state.sekectedPerson} />;

    return (
      <div className="StarshipsPage">
        <Row left={itemList} right={detailsInfo} />
      </div>
    );
  }
}
