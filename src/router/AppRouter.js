import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Description from "../components/Description";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/description/:id" exact component={Description} />
    </Switch>
  </Router>
);

export default AppRouter;
