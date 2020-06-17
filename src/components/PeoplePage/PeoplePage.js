import React from "react";
import ItemsList from "../ItemsList";
import DetailsInfo from "../DetailsInfo";
import "./PeoplePage.css";
import ErrorComponetn from "../ErrorComponent";
import SwapiServices from "../../services/SwapiServices";
import Row from "../Row";

export default class PeoplePage extends React.Component {
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
      <ItemsList
        onItemClick={this.onPersonSelect}
        getData={this.swapi.getAllPeople}
        renderItem={(item) => item.name}
      />
    );

    const detailsInfo = (
      <DetailsInfo personId={this.state.sekectedPerson} />
    );

    return (
      <div className="PeoplePage">
        <Row left={itemList} right={detailsInfo} />
      </div>
    );
  }
}
