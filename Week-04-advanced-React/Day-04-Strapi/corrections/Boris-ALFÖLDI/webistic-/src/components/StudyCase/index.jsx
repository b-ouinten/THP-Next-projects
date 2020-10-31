import React, { useState, useEffect, useContext } from "react";
import { useParams} from "react-router-dom";
import LanguageContext from "./../../LanguageContext";
import { IntlProvider, FormattedMessage } from "react-intl";
import messagesFr from "./../../translation/fr";
import messagesEn from "./../../translation/en";

const messages = {
  fr: messagesFr,
  en: messagesEn,
};

const StudyCase = () => {
  const language = useContext(LanguageContext);
  const [currentSutdyCase, setCurrentSutdyCase] = useState("");
  const { sutdyCaseSlug } = useParams();

  useEffect(() => {
    setCurrentSutdyCase(sutdyCaseSlug)
  }, [sutdyCaseSlug])

  console.log(currentSutdyCase)
  console.log(sutdyCaseSlug)

  return (
    <>
      <IntlProvider locale={language.local} messages={messages[language.local]}>
        <h1>
          <FormattedMessage id={`${currentSutdyCase}.title`} />
        </h1>
        <i>
          <FormattedMessage id={`${currentSutdyCase}.content`} />
        </i>
      </IntlProvider>
    </>
  );
};

export default StudyCase;
