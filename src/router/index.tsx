import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Discover from "../pages/Discover";
import Home from "../pages/Home";
import Me from "../pages/me";
import Series from "../pages/Series";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/discover" component={Discover} />
        <Route path="/me" component={Me} />
        <Route path="/bookshelf" component={Home} />
        <Route path="/series/:id" component={Series} />
        <Redirect path="*" to="/bookshelf" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
