/* eslint-disable no-mixed-operators */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, FormattedMessage } from 'react-intl';
import Message from './components/message';

import messageFr from './assets/translation/fr';
import messageEn from './assets/translation/en';

const messages = {
  fr: messageEn,
  en: messageFr,
};

const App = () => {
  const [language, setLanguage] = useState('fr');
  const handleClick = () => setLanguage(language === 'en' ? 'fr' : 'en');
  // const handleClick = () => setLanguage(language === 'fr' && 'en' || 'fr');

  return (
    <IntlProvider messages={messages[language]}>
      <p>Bienvenue dans mon application</p>
      <FormattedMessage id="error.field" />
      <br />
      <br />
      Message from component `Message` :
      {' '}
      <Message />
      <br />
      <button type="button" onClick={handleClick}>Toggle language</button>
    </IntlProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
