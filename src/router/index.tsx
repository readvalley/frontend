import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Creator from "../pages/Creator";
import Discover from "../pages/Discover";
import Home from "../pages/Home";
import Me from "../pages/me";
import Reader from "../pages/Reader";
import Series from "../pages/Series";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/discover" component={Discover} />
        <Route path="/me" component={Me} />
        <Route path="/bookshelf" component={Home} />
        <Route path="/series/:id" component={Series} />
        <Route path="/reader/:seriesId/:writingId" component={Reader} />
        <Route path="/creator/:id" component={Creator} />
        <Redirect path="*" to="/bookshelf" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
