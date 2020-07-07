import React from "react";
import DetailsInfo from "../DetailsInfo";
import "./FilmsPage.scss";
import ErrorComponetn from "../ErrorComponent";
import SwapiContext from "../SwapiServiceContext/SwapiServiceContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FilmsList from "../Filmslist";

import ANewHope from "../image/films/ANewHope.jpg";
import AttackOfTheClones from "../image/films/AttackOfTheClones.jpg";
import ReturnOfTheJedi from "../image/films/ReturnOfTheJedi.jpg";
import RevengeOfTheSith from "../image/films/RevengeOfTheSith.jpg";
import TheEmpireStrikesBack from "../image/films/TheEmpireStrikesBack.jpg";
import ThePhantomMenace from "../image/films/ThePhantomMenace.jpg";

import ANewHopeTEXT from "../TextInfo/TextFilms/ANewHope";
import AttackOfTheClonesTEXT from "../TextInfo/TextFilms/AttackOfTheClones";
import ReturnOfTheJediTEXT from "../TextInfo/TextFilms/ReturnOfTheJedi";
import RevengeOfTheSithTEXT from "../TextInfo/TextFilms/RevengeOfTheSith";
import TheEmpireStrikesBackTEXT from "../TextInfo/TextFilms/TheEmpireStrikesBack";
import ThePhantomMenaceTEXT from "../TextInfo/TextFilms/ThePhantomMenace";

export default class FilmsPage extends React.Component {
  static contextType = SwapiContext;

  state = {
    sekectedPerson: 1,
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

    const image = [
      ANewHope,
      TheEmpireStrikesBack,
      ReturnOfTheJedi,
      ThePhantomMenace,
      AttackOfTheClones,
      RevengeOfTheSith,
    ];

    const text = [
      <ANewHopeTEXT />,
      <TheEmpireStrikesBackTEXT />,
      <ReturnOfTheJediTEXT />,
      <ThePhantomMenaceTEXT />,
      <AttackOfTheClonesTEXT />,
      <RevengeOfTheSithTEXT />,
    ];

    return (
      <div className="FilmsPage">
        <Router>
          <Switch>
            <Route
              path="/films/info/:text"
              render={() => (
                <DetailsInfo
                  personId={this.state.sekectedPerson}
                  getData={this.context.getFilms}
                  getInfo={["producer", "director", "episodeId"]}
                  getIMG={image}
                  getTEXT={text}
                />
              )}
            />

            <FilmsList
              onItemClick={this.onPersonSelect}
              renderItem={(item) => item.name}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
