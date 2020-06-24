import React from "react";
import DetailsInfo from "../DetailsInfo";
import "./StarshipsPage.css";
import ErrorComponetn from "../ErrorComponent";
import Row from "../Row";
import StarshipsList from "../Starshipslist";
import SwapiContext from "../SwapiServiceContext/SwapiServiceContext";

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

    const itemList = (
      <StarshipsList
        onItemClick={this.onPersonSelect}
        renderItem={(item) => item.name}
      />
    );

    const detailsInfo = (
      <DetailsInfo
        personId={this.state.sekectedPerson}
        getData={this.context.getStarships}
        getInfo={['model', 'manufacturer', 'starshipClass']}
        getIMG={`https://starwars-visualguide.com/assets/img/starships/`}
      />
    );

    return (
      <div className="StarshipsPage">
        <Row left={itemList} right={detailsInfo} />
      </div>
    );
  }
}
