import React from "react";
import "./FilmsList.scss";
import SwapiService from "../../services/SwapiServices";
import { withData } from "../helpers";
import { Link } from "react-router-dom";

import ANewHope from "../image/films/ANewHope.jpg";
import AttackOfTheClones from "../image/films/AttackOfTheClones.jpg";
import ReturnOfTheJedi from "../image/films/ReturnOfTheJedi.jpg";
import RevengeOfTheSith from "../image/films/RevengeOfTheSith.jpg";
import TheEmpireStrikesBack from "../image/films/TheEmpireStrikesBack.jpg";
import ThePhantomMenace from "../image/films/ThePhantomMenace.jpg";

const FilsmsList = (props) => {
  const { data, onItemClick, renderItem } = props;

  const image = [
    ANewHope,
    TheEmpireStrikesBack,
    ReturnOfTheJedi,
    ThePhantomMenace,
    AttackOfTheClones,
    RevengeOfTheSith
  ];

  const renderItems = (arr) => {
    
    
    return arr.map((item) => {
      const text = renderItem(item);
      const getNumber = item.id - 1;
      const getIMG = image[getNumber];

      return (
        <div
          className="col-lg-md FilmsItemInfo"
          key={item.id}
          onClick={() => onItemClick(item.id)}
        >
          <Link to={`/films/info/${text}`}>
            <img src={getIMG} alt="planet" />
            <div className="FilmsName">{text}</div>
          </Link>
        </div>
      );
    });
  };

  const items = renderItems(data);

  return (
    <div className="FilmsList">
      <div className="FilmsListHeader">
        <h2>Films</h2>
        <div className="angle-row">
          <div className="inner" />
        </div>
      </div>
      <div className="container">
        <div className="row FilmsItem">{items}</div>
      </div>
    </div>
  );
};

const { getAllFilms } = new SwapiService();

export default withData(FilsmsList, getAllFilms);
