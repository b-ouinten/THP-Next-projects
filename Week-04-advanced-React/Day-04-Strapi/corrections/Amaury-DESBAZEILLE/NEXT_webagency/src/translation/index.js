import homeFr from "./fr/home.json";
import aboutFr from "./fr/about.json";
import worksFr from "./fr/works.json";
import studycaseFr from "./fr/studycase.json";
import homeEn from "./en/home.json";
import aboutEn from "./en/about.json";
import worksEn from "./en/works.json";
import studycaseEn from "./en/studycase.json";



const normaliseLang = (json) => {
  const result = {};
  const reduceObj = (object, previousKey = null) => {
    Object.keys(object).forEach(key => {
      const value = object[key];
      let newKey = key;
      if (previousKey) {
        newKey = `${previousKey}.${key}`;
      }
      if (typeof value === 'string') {
        result[newKey] = value
      } else {
        reduceObj(value, newKey);
      }
    })
  }
  reduceObj(json);
  return result;
};

console.log(normaliseLang(homeFr));

const messages = {
  fr: {
    ...normaliseLang(homeFr),
    ...normaliseLang(aboutFr),
    ...normaliseLang(worksFr),
    ...normaliseLang(studycaseFr),
  },
  en: {
    ...normaliseLang(homeEn),
    ...normaliseLang(aboutEn),
    ...normaliseLang(worksEn),
    ...normaliseLang(studycaseEn),
  },
};

export default messages;
