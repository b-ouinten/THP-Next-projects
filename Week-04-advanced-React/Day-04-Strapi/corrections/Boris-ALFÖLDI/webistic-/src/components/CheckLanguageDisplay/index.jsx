import React, { useContext} from "react";
import { Image } from "react-bootstrap";
import en from "./../../assets/img/en.png"
import fr from "./../../assets/img/fr.png"
import LanguageContext from "./../../LanguageContext";

const CheckLanguageDisplay = () => {
  const language = useContext(LanguageContext);

  const languageButtun= {}
  
  return (
    <>
      {language.local === "en" || <Image onClick={() => {language.swichLanguage("en")}} src={en} width="35px" height="39px" alt="english" roundedCircle />}
      {language.local === "fr" || <Image onClick={() => {language.swichLanguage("fr")}} src={fr} width="35px" height="39px" alt="french" roundedCircle />}
    </>
  );
};

export default CheckLanguageDisplay;
