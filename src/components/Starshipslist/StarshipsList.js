import React from "react";
import "./StarshipsList.css";
import SwapiService from "../../services/SwapiServices";
import { withData } from "../helpers";

const StarshipsList = (props) => {
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

  return <ul className="StarshipsList">{items}</ul>;
};

const { getAllStarships } = new SwapiService();

export default withData(StarshipsList, getAllStarships);
