import React from "react";
import "./DetailsInfo.scss";
import SwapiContext from "../SwapiServiceContext/SwapiServiceContext";
import Loader from "../Loader";

export default class DetailsInfo extends React.Component {
  static contextType = SwapiContext;

  state = {
    item: null,
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

    if (!item) {
      return (
        <div className="DetailsInfo">
          <Loader />
        </div>
      );
    }

    const { id, name } = item;
    const { getInfo, getIMG, getTEXT } = this.props;

    const getNumber = id - 1;
    const getPicture = getIMG[getNumber];
    const getText = getTEXT[getNumber];

    const elements = getInfo.map((key) => {
      return (
        <div className="details" key={key}>
          <div className="details_info">{key} </div>
          <div className="details_parametr">{item[key]}</div>
        </div>
      );
    });

    return (
      <div className="DetailsInfo">
        <div className="DetailsInfoHeader">
          <h2>Details Info</h2>
          <div className="angle-row">
            <div className="inner" />
          </div>
        </div>
        <div className="d-flex">
          <div className="InfoParametr">
            <h3>{name}</h3>
            <img src={getPicture} alt="planet" />
            <div className="detail_info_block">{elements}</div>
          </div>
          <div className="InfoText">{getText}</div>
        </div>
      </div>
    );
  }
}
