import React from "react";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";
import NewWriting from "./NewWriting";
import Series from "./Series";
import SeriesInfo from "./SeriesInfo";
import WritingInfo from "./WritingInfo";

const Publish: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <>
      <Switch>
        <Route
          exact
          path={`${match.path}/series/:id/newwriting`}
          component={NewWriting}
        />
        <Route
          exact
          path={`${match.path}/series/:id/:id`}
          component={WritingInfo}
        />
        <Route exact path={`${match.path}/series/:id`} component={SeriesInfo} />
        <Route path={`${match.path}/series`} component={Series} />
        <Redirect path="*" to="/publish/series" />
      </Switch>
    </>
  );
};

export default Publish;
