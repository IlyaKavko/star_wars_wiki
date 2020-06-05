import React from "react";
import "./DetailsInfo.css";
import SwapiServices from "../../services/SwapiServices";

export default class DetailsInfo extends React.Component {
  constructor() {
    super();
    this.updatePerson();
  }

  swapi = new SwapiServices();

  state = {
    person: {},
  };

  onPersonLoaded = (person) => {
    this.setState({
      person,
    });
  };

  updatePerson() {
    const id = Math.round(Math.random() * 20);
    this.swapi.getPerson(id).then(this.onPersonLoaded);
  }

  render() {
    const {person:{name, mass, homeworld, gender, id}} = this.state;

    return (
      <div className="DetailsInfo">
        <h3>{ name }</h3>
        <div className="info_block d-flex">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            alt="User"
          />
          <ul className="detail_info_block">
            <li>
              <span>mass</span>
              <span>{mass}</span>
            </li>
            <li>
              <span>homeworld</span>
              <span>{homeworld}</span>
            </li>
            <li>
              <span>gender</span>
              <span>{gender}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
