import React from "react";
import "./DetailsInfo.scss";
import SwapiContext from "../SwapiServiceContext/SwapiServiceContext";

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

import LukeSkywalkerTEXT from "../TextInfo/LukeSkywalker";
import C_3POTEXT from "../TextInfo/C_3PO";
import R2_D2TEXT from "../TextInfo/R2_D2";
import DarthVaderTEXT from "../TextInfo/DarthVader";
import LeiaOrganaTEXT from "../TextInfo/LeiaOrgana";
import OwenLarsTEXT from "../TextInfo/OwenLars";
import BeruWhitesunlarsTEXT from "../TextInfo/BeruWhitesunlars";
import R5_D4TEXT from "../TextInfo/R5_D4";
import BiggsDarklighterTEXT from "../TextInfo/BiggsDarklighter";
import ObiWanKenobiTEX from "../TextInfo/ObiWanKenobi";

export default class DetailsInfo extends React.Component {
  static contextType = SwapiContext;

  state = {
    item: null,
    error: false,
  };

  onError = () => {
    this.setState({
      error: true,
    });
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId, getData } = this.props;
    if (!personId) {
      return;
    }

    getData(personId)
      .then((item) => {
        this.setState({ item });
      })
      .catch(this.onError);
  }

  render() {
    const { item } = this.state;

    if (!item) {
      return (
        <div className="DetailsInfo">
          <p>Error</p>
        </div>
      );
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

    const { id, name } = item;
    const { getInfo } = this.props;

    const getNumber = id - 1;
    const getPicture = image[getNumber];
    const getText = text[getNumber];

    const elements = getInfo.map((key) => {
      return (
        <div className="details" key={key}>
          <div className="details_info">{key} </div>
          <div className="details_parametr">{item[key]}</div>
        </div>
      );
    });

    return (
      <div className="DetailsInfo">
        <div className="DetailsInfoHeader">
          <h2>Details Info</h2>
          <div className="angle-row">
            <div className="inner" />
          </div>
        </div>
        <div className="d-flex">
          <div className="InfoParametr">
            <h3>{name}</h3>
            <img src={getPicture} alt="planet" />
            <div className="detail_info_block">{elements}</div>
          </div>
          <div className="InfoText">{getText}</div>
        </div>
      </div>
    );
  }
}
