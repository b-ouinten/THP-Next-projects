/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import './navbar.scss';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { useIntl } from 'react-intl';
import enCaseStudies from '../../../assets/translation/en/case-studies.json';
import frCaseStudies from '../../../assets/translation/fr/case-studies.json';
import LanguageContext from '../../../context';

const caseStudies = {
  en: { ...enCaseStudies },
  fr: { ...frCaseStudies },
};

const Navbar = ({ url }) => {
  const context = useContext(LanguageContext);
  const { currentLanguage } = context;
  const intl = useIntl();

  return (
    <nav className="Navbar">
      {
        Object.entries(caseStudies[currentLanguage]).map(([client, { title }]) => (
          <Link key={client} to={`${url}/${client}-${intl.formatMessage({ id: 'case-study.path' })}`}>
            <div className="card">
              <div className="container">
                <h4><b>{title}</b></h4>
              </div>
            </div>
          </Link>
        ))
      }
    </nav>
  );
};

export default Navbar;
