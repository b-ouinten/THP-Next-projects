import { defaultHome } from './DefaultHome';
import {PageList} from './PageList';

const searcher = () => {
  let search = document.getElementById("findgame").value;
  search = "?search=" + search;
  return PageList(search);
}

export {searcher};