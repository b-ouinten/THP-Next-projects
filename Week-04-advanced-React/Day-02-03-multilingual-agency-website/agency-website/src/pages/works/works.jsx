/* eslint-disable react/prop-types */
import React from 'react';
import {
  useRouteMatch,
} from 'react-router-dom';

import Navbar from './navbar';
import Page from '../page';

const Works = () => {
  const { url } = useRouteMatch();

  return (
    <Page page="works">

      <Navbar url={url} />
    </Page>
  );
};

export default Works;
