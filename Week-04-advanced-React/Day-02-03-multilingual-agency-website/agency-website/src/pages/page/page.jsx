/* eslint-disable react/prop-types */
import './page.scss';
import React from 'react';
import { useIntl } from 'react-intl';

const Page = ({ page, children }) => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: `${page}.title` });
  const text = intl.formatMessage({ id: `${page}.text` });

  return (
    <div className="page">
      <h2>{title}</h2>
      <p>{text}</p>

      {children}
    </div>
  );
};

export default Page;
