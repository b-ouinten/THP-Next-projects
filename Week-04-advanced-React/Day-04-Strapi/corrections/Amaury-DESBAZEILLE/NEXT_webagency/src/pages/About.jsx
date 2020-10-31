import React from "react";
import { FormattedMessage } from 'react-intl';


const About = () => {

  return(
    <div>
      <h1>about page</h1>
      <h3><FormattedMessage id="about.title" /></h3>
      <p><FormattedMessage id="about.text" /></p>
    </div>
  )
}

export default About;
