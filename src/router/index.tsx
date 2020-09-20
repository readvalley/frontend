import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Modal } from "../components/Modal";
import Creator from "../pages/Creator";
import Discover from "../pages/Discover";
import Home from "../pages/Home";
import Me from "../pages/me";
import Publish from "../pages/Publish";
import Reader from "../pages/Reader";
import Series from "../pages/Series";

const Router: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/discover" component={Discover} />
          <Route path="/me" component={Me} />
          <Route path="/bookshelf" component={Home} />
          <Route path="/series/:id" component={Series} />
          <Route path="/reader/:seriesId/:writingId" component={Reader} />
          <Route path="/creator/:id" component={Creator} />
          <Route path="/publish" component={Publish} />
          <Redirect path="*" to="/bookshelf" />
        </Switch>
        <Modal />
      </BrowserRouter>
    </>
  );
};

export default Router;
