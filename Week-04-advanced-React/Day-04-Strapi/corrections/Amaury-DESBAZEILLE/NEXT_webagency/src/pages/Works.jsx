import React, { useState } from "react";
import { FormattedMessage } from 'react-intl';
import ClientCase from '../components/ClientCase';


const Works = () => {
  const [casename, setCasename] = useState('');

  return(
    <div>
      <h1>works page</h1>
      <h3><FormattedMessage id="works.title" /></h3>
      <p><FormattedMessage id="works.text" /></p>
      <button onClick={() => setCasename('sedal')} >Sedal</button>
      <button onClick={() => setCasename('platon')} >Platon</button>
      <button onClick={() => setCasename('solane')} >Solane</button>

      <ClientCase casename={casename} />

    </div>
  )
}

export default Works;
