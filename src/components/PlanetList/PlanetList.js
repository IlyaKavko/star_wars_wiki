import React from "react";
import "./PlanetList.scss";
import SwapiService from "../../services/SwapiServices";
import { withData } from "../helpers";

import Tatooine from "../image/planet/tatooine.jpg";
import Alderaan from "../image/planet/alderaan.jpg";
import Yavin_IV from "../image/planet/yavin_iv.jpg";
import Hoth from "../image/planet/hoth.jpg";
import Dagobah from "../image/planet/dagobah.jpg";
import Bespin from "../image/planet/bespin.jpg";
import Endor from "../image/planet/endor.jpg";
import Naboo from "../image/planet/naboo.jpg";
import Coruscant from "../image/planet/coruscant.jpg";
import Kamino from "../image/planet/kamino.jpg";
import { Link } from "react-router-dom";

const PlanetList = (props) => {
  const { data, onItemClick, renderItem } = props;

  const image = [
    Tatooine,
    Alderaan,
    Yavin_IV,
    Hoth,
    Dagobah,
    Bespin,
    Endor,
    Naboo,
    Coruscant,
    Kamino,
  ];

  const renderItems = (arr) => {
    return arr.map((item) => {
      const text = renderItem(item);
      const getNumber = item.id - 1;
      const getIMG = image[getNumber];

      return (
        <div
          className="col-lg-md planetItemInfo"
          key={item.id}
          onClick={() => onItemClick(item.id)}
        >
          <Link to="/planet/info">
            <img src={getIMG} alt="planet" />
            <div className="planetName">{text}</div>
          </Link>
        </div>
      );
    });
  };

  const items = renderItems(data);

  return (
    <div className="PlanteList">
      <div className="PlanetListHeader">
        <h2>planet</h2>
        <div className="angle-row">
          <div className="inner" />
        </div>
      </div>
      <div className="container">
        <div className="row planetItem">{items}</div>
      </div>
    </div>
  );
};

const { getAllPlanet } = new SwapiService();

export default withData(PlanetList, getAllPlanet);
