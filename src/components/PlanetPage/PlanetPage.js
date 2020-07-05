import React from "react";
import DetailsInfo from "../DetailsInfo";
import "./PlanetPage.css";
import ErrorComponetn from "../ErrorComponent";
import PlanetList from "../PlanetList";
import SwapiContext from "../SwapiServiceContext/SwapiServiceContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

import TatooineTEXT from "../TextInfo/TextPlanet/Tatooine";
import AlderaanTEXT from "../TextInfo/TextPlanet/Alderaan";
import YavinIVTEXT from "../TextInfo/TextPlanet/YavinIV";
import HothTEXT from "../TextInfo/TextPlanet/Hoth";
import DagobahTEXT from "../TextInfo/TextPlanet/Dagobah";
import BespinTEXT from "../TextInfo/TextPlanet/Bespin";
import EndorTEXT from "../TextInfo/TextPlanet/Endor";
import NabooTEXT from "../TextInfo/TextPlanet/Naboo";
import CoruscantTEXT from "../TextInfo/TextPlanet/Coruscant";
import KaminoTEXT from "../TextInfo/TextPlanet/Kamino";

export default class PlanetPage extends React.Component {
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

    const text = [
      <TatooineTEXT />,
      <AlderaanTEXT />,
      <YavinIVTEXT />,
      <HothTEXT />,
      <DagobahTEXT />,
      <BespinTEXT />,
      <EndorTEXT />,
      <NabooTEXT />,
      <CoruscantTEXT />,
      <KaminoTEXT />,
    ];

    return (
      <div className="PeoplePage">
        <Router>
          <Switch>
            <Route
              path="/planet/info/:text"
              render={() => (
                <DetailsInfo
                  personId={this.state.sekectedPerson}
                  getData={this.context.getPlanet}
                  getInfo={["diameter", "population", "climate"]}
                  getIMG={image}
                  getTEXT={text}
                />
              )}
            />

            <PlanetList
              onItemClick={this.onPersonSelect}
              renderItem={(item) => item.name}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
