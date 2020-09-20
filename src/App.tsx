import React from "react";
import MobileSizedView from "react-mobile-sized-view";

import Router from "./router";

const App: React.FC = () => (
  <MobileSizedView
    backgroundColor="#e9ecef"
    screenBackgroundColor="#FFF"
    screenLightShadow="-4px -4px 32px #f1f3f5"
    screenDarkShadow="4px 4px 32px #dee2e6"
  >
    <Router />
  </MobileSizedView>
);

export default App;
