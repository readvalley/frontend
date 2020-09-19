import React from "react";
import MobileSizedView from "react-mobile-sized-view";

import Router from "./router";

const App: React.FC = () => (
  <MobileSizedView
  backgroundColor="#E1EAF4"
  screenBackgroundColor="#FFF"
  screenLightShadow="-31px -31px 62px #FFF"
  screenDarkShadow="31px 31px 62px #D5DEEB"
  >
    <Router />
  </MobileSizedView>
);

export default App;
