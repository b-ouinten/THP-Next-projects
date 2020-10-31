import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { IntlProvider, FormattedMessage } from "react-intl";
import messagesFr from "./../../translation/fr";
import messagesEn from "./../../translation/en";
import LanguageContext from "./../../LanguageContext";

const messages = {
  fr: messagesFr,
  en: messagesEn,
};

const TabbedInterfaces = (props) => {
  const language = useContext(LanguageContext);

  return (
    <Container>
      <Row>
        <IntlProvider locale={language.local} messages={messages[language.local]}>
          <h1><FormattedMessage id={`${props.url}.title`} /></h1>
          <i><FormattedMessage id={`${props.url}.intro`} /></i>
        </IntlProvider>
      </Row>
    </Container>
  );
};

export default TabbedInterfaces;
