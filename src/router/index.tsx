import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";

const Router: React.FC = (props) => {
  console.log(props);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        {/* <Redirect path="*" to="/" /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
