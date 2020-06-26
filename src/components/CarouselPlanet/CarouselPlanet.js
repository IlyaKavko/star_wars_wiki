import React from "react";
import Bootstrap, { Carousel, BImg } from "bootstrap-4-react";

import Tatooine from "./planet/tatooine.png";
import alberan from "./planet/alberan.png";
import bespin from "./planet/bespin.png";
import corusant from "./planet/corusant.png";
import Dagobah from "./planet/Dagobah.png";
import endor from "./planet/endor.png";
import Hoth from "./planet/Hoth.png";
import kamino from "./planet/kamino.png";
import naboo from "./planet/naboo.png";
import yvin4 from "./planet/yvin4.png";

import "./CarouselPlanet.scss"

export default class CarouselPlanet extends React.Component {
  componentWillMount() {
    window.setTimeout(() => Bootstrap.carousel(), 2000);
  }

  render() {
    return (
      <div className="CarouselPlanet">
        <Carousel w="100" id="carouselExampleIndicators">
          <Carousel.Indicators>
            <Carousel.Indicator
              target="#carouselExampleIndicators"
              to="0"
              active
            />
            <Carousel.Indicator target="#carouselExampleIndicators" to="1" />
            <Carousel.Indicator target="#carouselExampleIndicators" to="2" />
            <Carousel.Indicator target="#carouselExampleIndicators" to="3" />
            <Carousel.Indicator target="#carouselExampleIndicators" to="4" />
            <Carousel.Indicator target="#carouselExampleIndicators" to="5" />
            <Carousel.Indicator target="#carouselExampleIndicators" to="6" />
            <Carousel.Indicator target="#carouselExampleIndicators" to="7" />
            <Carousel.Indicator target="#carouselExampleIndicators" to="8" />
            <Carousel.Indicator target="#carouselExampleIndicators" to="9" />
          </Carousel.Indicators>
          <Carousel.Inner>
            <Carousel.Item active>
              <BImg display="block" w="100" src={Tatooine} />
              <Carousel.Caption display="none md-block">
                <h5>Tatooine</h5>
                <p>Wasteland</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <BImg display="block" w="100" src={alberan} />
              <Carousel.Caption display="none md-block">
                <h5>Alberan</h5>
                <p>A peaceful planet destroyed by the Empire</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <BImg display="block" w="100" src={bespin} />
              <Carousel.Caption display="none md-block">
                <h5>Bespin</h5>
                <p>Neutral shelter</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <BImg display="block" w="100" src={corusant} />
              <Carousel.Caption display="none md-block">
                <h5>Сorusant</h5>
                <p>Capital Of The Galaxy</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <BImg display="block" w="100" src={Dagobah} />
              <Carousel.Caption display="none md-block">
                <h5>Dagobah</h5>
                <p>
                  The secluded world of swamps and forests served as a refuge
                  for Grand master Yoda of the Jedi Order during his exile
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <BImg display="block" w="100" src={endor} />
              <Carousel.Caption display="none md-block">
                <h5>Endor</h5>
                <p>Forest-covered satellite</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <BImg display="block" w="100" src={Hoth} />
              <Carousel.Caption display="none md-block">
                <h5>Hoth</h5>
                <p>Place of construction of the Echo base</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <BImg display="block" w="100" src={kamino} />
              <Carousel.Caption display="none md-block">
                <h5>Kamino</h5>
                <p>Place of birth of clones</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <BImg display="block" w="100" src={yvin4} />
              <Carousel.Caption display="none md-block">
                <h5>Yvin IV</h5>
                <p>
                  The fourth satellite of the gas giant Yavin. It is suitable
                  for life and is covered with rough tropical vegetation
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <BImg display="block" w="100" src={naboo} />
              <Carousel.Caption display="none md-block">
                <h5>Naboo</h5>
                <p>World of art</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel.Inner>
        </Carousel>
      </div>
    );
  }
}
