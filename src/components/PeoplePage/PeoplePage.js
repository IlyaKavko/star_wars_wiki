import React from "react";
import ItemsList from "../ItemsList";
import DetailsInfo from "../DetailsInfo";
import "./PeoplePage.css";
import ErrorComponetn from "../ErrorComponent";
import SwapiServices from "../../services/SwapiServices";

const Row = ({ left, right}) => {
    return (
        <div className='Row row'>
            <div className='col'>
                {left}
            </div>
            <div className='col'>
                {right}
            </div>
        </div>
    )
}

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

    const detailsInfo = <DetailsInfo personId={this.state.sekectedPerson} />;

    return (
      <div className="PeoplePage">
        <Row left={itemList} right={detailsInfo} />
      </div>
    );
  }
}
