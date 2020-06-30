import React from "react";
import "./ItemsList.scss";
import SwapiService from "../../services/SwapiServices";
import { withData } from "../helpers";

import LukeSkywalker from "../image/people/LukeSkywalker.jpg";
import C_3PO from "../image/people/C_3PO.jpg";
import R2_D2 from "../image/people/R2_D2.jpg";
import DarthVader from "../image/people/DarthVader.jpg";
import LeiaOrgana from "../image/people/LeiaOrgana.jpg";
import OwenLars from "../image/people/OwenLars.jpg";
import BeruWhitesunlars from "../image/people/BeruWhitesunlars.jpg";
import R5_D4 from "../image/people/R5_D4.jpg";
import BiggsDarklighter from "../image/people/BiggsDarklighter.jpg";
import ObiWanKenobi from "../image/people/ObiWanKenobi.jpg";
import { Link } from "react-router-dom";

const ItemsList = (props) => {
  const { data, onItemClick, renderItem } = props;

  const image = [
    LukeSkywalker,
    C_3PO,
    R2_D2,
    DarthVader,
    LeiaOrgana,
    OwenLars,
    BeruWhitesunlars,
    R5_D4,
    BiggsDarklighter,
    ObiWanKenobi,
  ];

  const renderItems = (arr) => {
    return arr.map((item) => {
      const text = renderItem(item);
      const getNumber = item.id - 1;
      const getIMG = image[getNumber];

      return (
        <div
          className="col-lg-md peopleItemInfo"
          key={item.id}
          onClick={() => onItemClick(item.id)}
        >
          <Link to="/people/info">
            <img src={getIMG} alt="piople" />

            <div className="peopleName">{text}</div>
          </Link>
        </div>
      );
    });
  };

  const items = renderItems(data);

  return (
    <div className=" ItemsList">
      <div className="ItemListHeader">
        <h2>people</h2>
        <div className="angle-row">
          <div className="inner" />
        </div>
      </div>
      <div className="container">
        <div className="row peopleItem">{items}</div>
      </div>
    </div>
  );
};

const { getAllPeople } = new SwapiService();

export default withData(ItemsList, getAllPeople);
