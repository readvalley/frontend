import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Discover from "../pages/Discover";
import Home from "../pages/Home";

const Router: React.FC = (props) => {
  console.log(props);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/discover" component={Discover} />
        <Route path="/" exact component={Home} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
