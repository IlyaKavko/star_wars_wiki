import React from "react";
import PeopleList from "../PeopleList";
import DetailsInfo from "../DetailsInfo";
import "./PeoplePage.css";
import ErrorComponetn from "../ErrorComponent";
import SwapiContext from "../SwapiServiceContext/SwapiServiceContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LukeSkywalkerIMG from "../image/people/LukeSkywalker.jpg";
import C_3POIMG from "../image/people/C_3PO.jpg";
import R2_D2IMG from "../image/people/R2_D2.jpg";
import DarthVaderIMG from "../image/people/DarthVader.jpg";
import LeiaOrganaIMG from "../image/people/LeiaOrgana.jpg";
import OwenLarsIMG from "../image/people/OwenLars.jpg";
import BeruWhitesunlarsIMG from "../image/people/BeruWhitesunlars.jpg";
import R5_D4IMG from "../image/people/R5_D4.jpg";
import BiggsDarklighterIMG from "../image/people/BiggsDarklighter.jpg";
import ObiWanKenobiIMG from "../image/people/ObiWanKenobi.jpg";

import LukeSkywalkerTEXT from "../TextInfo/TextPeople/LukeSkywalker";
import C_3POTEXT from "../TextInfo/TextPeople/C_3PO";
import R2_D2TEXT from "../TextInfo/TextPeople/R2_D2";
import DarthVaderTEXT from "../TextInfo/TextPeople/DarthVader";
import LeiaOrganaTEXT from "../TextInfo/TextPeople/LeiaOrgana";
import OwenLarsTEXT from "../TextInfo/TextPeople/OwenLars";
import BeruWhitesunlarsTEXT from "../TextInfo/TextPeople/BeruWhitesunlars";
import R5_D4TEXT from "../TextInfo/TextPeople/R5_D4";
import BiggsDarklighterTEXT from "../TextInfo/TextPeople/BiggsDarklighter";
import ObiWanKenobiTEX from "../TextInfo/TextPeople/ObiWanKenobi";

export default class PeoplePage extends React.Component {
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
      LukeSkywalkerIMG,
      C_3POIMG,
      R2_D2IMG,
      DarthVaderIMG,
      LeiaOrganaIMG,
      OwenLarsIMG,
      BeruWhitesunlarsIMG,
      R5_D4IMG,
      BiggsDarklighterIMG,
      ObiWanKenobiIMG,
    ];

    const text = [
      <LukeSkywalkerTEXT />,
      <C_3POTEXT />,
      <R2_D2TEXT />,
      <DarthVaderTEXT />,
      <LeiaOrganaTEXT />,
      <OwenLarsTEXT />,
      <BeruWhitesunlarsTEXT />,
      <R5_D4TEXT />,
      <BiggsDarklighterTEXT />,
      <ObiWanKenobiTEX />,
    ];

    return (
      <div className="PeoplePage">
        <Router>
          <Switch>
            <Route
              path="/people/info/:text"
              render={() => (
                <DetailsInfo
                  personId={this.state.sekectedPerson}
                  getData={this.context.getPerson}
                  getInfo={["mass", "birthDate", "gender", "homeworld"]}
                  getTEXT={text}
                  getIMG={image}
                />
              )}
            />
            <PeopleList
              onItemClick={this.onPersonSelect}
              renderItem={(item) => item.name}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
