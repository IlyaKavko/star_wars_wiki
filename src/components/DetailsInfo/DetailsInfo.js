import React from "react";
import "./DetailsInfo.css";
import SwapiContext from "../SwapiServiceContext/SwapiServiceContext";

export default class DetailsInfo extends React.Component {
  static contextType = SwapiContext;

  state = {
    person: null,
    error: false,
  };

  onError = () => {
    this.setState({
      error: true,
    });
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId, getData } = this.props;
    console.log(getData);
    if (!personId) {
      return;
    }

    getData(personId)
      .then((item) => {
        this.setState({ item });
      })
      .catch(this.onError);
  }

  render() {
    const { item } = this.state;
    console.log(item);
    if (!item) {
      return (
        <div className="DetailsInfo">
          <p>Error</p>
        </div>
      );
    }

    const { id, name } = item;
    const { getInfo, getIMG } = this.props;

    const elements = getInfo.map((key) => {
      return (
        <li key={key}>
          <span>{key} </span>
          <span>{item[key]}</span>
        </li>
      );
    });

    return (
      <div className="DetailsInfo">
        <h3>{name}</h3>
        <div className="">
          <img
            src={`${getIMG}${id}.jpg`}
            onError={(e) => {
              e.target.src =
                "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }}
            alt="planet"
          />
          <ul className="detail_info_block">{elements}</ul>
        </div>
      </div>
    );
  }
}
