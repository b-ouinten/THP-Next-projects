import React from "react";
import { FormattedMessage } from 'react-intl';

const Home = () => {

  return(
    <div>
      <h1>home page</h1>
      <h3><FormattedMessage id="home.title" /></h3>
      <p><FormattedMessage id="home.text" /></p>
    </div>
  )
}

export default Home;
