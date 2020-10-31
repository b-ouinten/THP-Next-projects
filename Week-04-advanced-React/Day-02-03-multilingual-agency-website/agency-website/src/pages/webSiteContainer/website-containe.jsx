import React from 'react';
import { useIntl } from 'react-intl';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Navbar from '../../components/navbar';
import Home from '../home';
import About from '../about';
import Works from '../works';
import CaseStudy from '../../components/case-study';

const WebSiteContainer = () => {
  const intl = useIntl();

  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path={`/${intl.formatMessage({ id: 'about.path' })}`}>
          <About />
        </Route>
        <Route exact path={`/${intl.formatMessage({ id: 'works.path' })}`}>
          <Works />
        </Route>
        <Route path={`/${intl.formatMessage({ id: 'works.path' })}/:caseStudy`}>
          <CaseStudy />
        </Route>
      </Switch>

    </>
  );
};

export default WebSiteContainer;
