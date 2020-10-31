/* eslint-disable react/prop-types */
import './case-study.scss';
import React from 'react';
import { injectIntl } from 'react-intl';
import { useParams } from 'react-router-dom';

const CaseStudy = ({ intl }) => {
  const { caseStudy } = useParams();

  const purge = intl.formatMessage({ id: 'case-study.path' }).replace(/\W/g, '\\$&');

  const regex = new RegExp(`-${purge}`);

  return (
    <div className="caseStudy">
      <h2>{intl.formatMessage({ id: `${caseStudy.replace(regex, '')}.title` })}</h2>
      <p>{intl.formatMessage({ id: `${caseStudy.replace(regex, '')}.text` })}</p>
    </div>
  );
};

export default injectIntl(CaseStudy);
