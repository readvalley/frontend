import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Discover from "../pages/Discover";
import Home from "../pages/Home";
import Me from "../pages/me";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/discover" component={Discover} />
        <Route path="/me" component={Me} />
        <Route path="/bookshelf" component={Home} />
        <Redirect path="*" to="/bookshelf" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
