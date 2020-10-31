import React, { useState } from "react";
import TabbedInterfaces from "../components/TabbedInterfaces";
import StudyCaseLinks from "../components/StudyCaseLinks";
import StudyCase from "../components/StudyCase";
import { Switch, Route } from "react-router-dom";

const Works = () => {
  const url=("works");

  return (
    <>
      <TabbedInterfaces url={url} />
      <StudyCaseLinks />
      <Switch>
        <Route path={`/works/:sutdyCaseSlug`}>
          <StudyCase />
        </Route>
      </Switch>
    </>
  );
};
export default Works;
