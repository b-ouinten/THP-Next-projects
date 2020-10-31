/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { useEffect } from "react";
import {
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

import { Navbar } from "./navbar";
import { Card } from "./card";

export const Works = ({ works }) => {
  const { path, url } = useRouteMatch();
  useEffect(() => console.log(works));

  return (
    <>
      <h2>Works</h2>
      <Navbar toLinks={works} url={url} />

      <Switch>
        <Route exact path={path}>
          <p>Please select a work !</p>
        </Route>
        <Route path={`${path}/:selectedTitle`}>
          <Card works={works} />
        </Route>
      </Switch>
    </>
  );
};
