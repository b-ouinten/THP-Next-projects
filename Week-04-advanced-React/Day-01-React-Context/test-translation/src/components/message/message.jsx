/* eslint-disable react/prop-types */
import React from 'react';
import { injectIntl } from 'react-intl';

const Message = ({ intl }) => {
  const message = intl.formatMessage({ id: 'error.field' });

  return <p>{message}</p>;
};

export default injectIntl(Message);
