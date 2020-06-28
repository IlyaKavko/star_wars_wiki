import React from "react";
import "./ItemsList.scss";
import SwapiService from "../../services/SwapiServices";
import { withData } from "../helpers";

import LukeSkywalker from "./people/LukeSkywalker.jpg";
import C_3PO from "./people/C_3PO.jpg";
import R2_D2 from "./people/R2_D2.jpg";
import DarthVader from "./people/DarthVader.jpg";
import LeiaOrgana from "./people/LeiaOrgana.jpg";
import OwenLars from "./people/OwenLars.jpg";
import BeruWhitesunlars from "./people/BeruWhitesunlars.jpg";
import R5_D4 from "./people/R5_D4.jpg";
import BiggsDarklighter from "./people/BiggsDarklighter.jpg";
import ObiWanKenobi from "./people/ObiWanKenobi.jpg";

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
      const getIMG = image[getNumber]
      
      return (
        <div className="col" key={item.id} onClick={() => onItemClick(item.id)}>
          <img src={getIMG} alt="piople" />
          {text}
        </div>
      );
    });
  };

  const items = renderItems(data);

  return (
    <div className="ItemsList">
      <div className="row">{items}</div>
    </div>
  );
};

const { getAllPeople } = new SwapiService();

export default withData(ItemsList, getAllPeople);
