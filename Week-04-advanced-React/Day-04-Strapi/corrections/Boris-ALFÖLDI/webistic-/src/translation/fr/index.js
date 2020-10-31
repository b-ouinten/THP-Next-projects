import about from './about.json';
import works from './works.json';
import home from './home.json';
import case_study from "./case_study.json"

const en = {
    ...case_study, ...about, ...works, ...home //On concatène tous nos objets JSON en un seul
};

export default en;