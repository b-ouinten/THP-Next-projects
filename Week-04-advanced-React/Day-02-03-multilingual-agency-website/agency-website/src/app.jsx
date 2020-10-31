import './app.scss';
import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';

import LanguageContext from './context';
import frContent from './assets/translation/fr';
import enContent from './assets/translation/en';
import WebSiteContainer from './pages/webSiteContainer/website-containe';

const contents = {
  en: enContent,
  fr: frContent,
};

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(
    () => ((!localStorage.lang)
      ? setCurrentLanguage('en')
      : setCurrentLanguage(JSON.parse(localStorage.lang))),
    [],
  );

  useEffect(
    () => { localStorage.lang = JSON.stringify(currentLanguage); },
    [currentLanguage],
  );

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      setCurrentLanguage,
    }}
    >
      <IntlProvider locale={currentLanguage} messages={contents[currentLanguage]}>
        <WebSiteContainer />
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default App;
