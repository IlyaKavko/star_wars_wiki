import React from "react";
import ItemsList from "../ItemsList";
import DetailsInfo from "../DetailsInfo";
import "./PeoplePage.css";
import ErrorComponetn from "../ErrorComponent";
import SwapiContext from "../SwapiServiceContext/SwapiServiceContext";
import Row from "../Row";

export default class PeoplePage extends React.Component {
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
      <ItemsList
        onItemClick={this.onPersonSelect}
        renderItem={(item) => item.name}
      />
    );

    const detailsInfo = (
      <DetailsInfo
        personId={this.state.sekectedPerson}
        getData={this.context.getPerson}
        getInfo={['mass', 'birthDate', 'gender', 'homeworld']}
        getIMG={`https://starwars-visualguide.com/assets/img/characters/`}
      />
    );

    return (
      <div className="PeoplePage">
        <Row left={itemList} right={detailsInfo} />
      </div>
    );
  }
}
