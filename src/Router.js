import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StationInfoPage, StationListPage } from "./pages";

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={StationListPage} />
      <Route path="/:abbr" component={StationInfoPage} />
    </Switch>
  </BrowserRouter>
);
