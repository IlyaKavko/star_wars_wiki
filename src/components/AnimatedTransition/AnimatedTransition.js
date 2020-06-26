import React from "react";

import { Switch, Route, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import PeoplePage from "../PeoplePage";
import PlanetPage from "../PlanetPage";
import StarshipsPage from "../StarshipsPage";
import CarouselPlanet from "../CarouselPlanet";

const AnimatedTransition = () => {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={location}>
        <Route path="/" exact>
        <CarouselPlanet/>
        <PeoplePage />
        <PlanetPage />
        <StarshipsPage />
        </Route>

        <Route path="/people">
          <PeoplePage />
        </Route>
        <Route path="/planet">
          <PlanetPage />
        </Route>
        <Route path="/ships">
          <StarshipsPage />
        </Route>
      </Switch>
    </animated.div>
  ));
};

export default AnimatedTransition;
