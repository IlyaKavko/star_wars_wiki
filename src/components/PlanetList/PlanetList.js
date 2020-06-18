import React from "react";
import "./PlanetList.css";
import SwapiService from "../../services/SwapiServices";
import { withData } from "../helpers";

const PlanetList = (props) => {
  const { data, onItemClick, renderItem } = props;

  const renderItems = (arr) => {
    return arr.map((item) => {
      const text = renderItem(item);
      return (
        <li
          className="list-group-item item_group"
          key={item.id}
          onClick={() => onItemClick(item.id)}
        >
          {text}
        </li>
      );
    });
  };

  const items = renderItems(data);

  return <ul className="PlanetList">{items}</ul>;
};

const { getAllPlanet } = new SwapiService();

export default withData(PlanetList, getAllPlanet);
