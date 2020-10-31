import React from "react";
import { FormattedMessage } from 'react-intl';

const ClientCase = ({casename}) => {

  return(
    <div>
      {casename &&
        <div>
          <h3><FormattedMessage id={`${casename}.title`}/></h3>
          <p><FormattedMessage id={`${casename}.text`} /></p>
        </div>
      }
    </div>
  )
}

export default ClientCase;
