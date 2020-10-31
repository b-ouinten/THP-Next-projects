import './navbar.scss';
import React, { useContext } from 'react';
import {
  Link,
} from 'react-router-dom';
import { useIntl } from 'react-intl';
import LanguageContext from '../../context';

import englishIcon from '../../assets/images/english.png';
import frenchIcon from '../../assets/images/french.png';

const langs = [
  {
    langCode: 'en',
    langIcon: englishIcon,
  },
  {
    langCode: 'fr',
    langIcon: frenchIcon,
  },
];

const Navbar = () => {
  const context = useContext(LanguageContext);
  const { currentLanguage, setCurrentLanguage } = context;
  const intl = useIntl();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">{intl.formatMessage({ id: 'home.label' })}</Link>
        </li>
        <li>
          <Link to={`/${intl.formatMessage({ id: 'about.path' })}`}>{`${intl.formatMessage({ id: 'about.label' })}`}</Link>
        </li>
        <li>
          <Link to={`/${intl.formatMessage({ id: 'works.path' })}`}>{`${intl.formatMessage({ id: 'works.label' })}`}</Link>
        </li>
        <li className="lang">
          {
            langs.map(({ langCode, langIcon }) => ((langCode === currentLanguage)
              ? null
              : (
                <div
                  key={langCode}
                  onClick={() => setCurrentLanguage(langCode)}
                  onKeyDown={() => setCurrentLanguage(langCode)}
                  role="presentation"
                >
                  <img src={langIcon} alt="language" width="25" heigth="25" />
                </div>
              )))
          }
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
