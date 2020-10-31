import 'bootstrap';
import "../sass/styles.scss";
import * as t from './tools';
import routes from './routes';
import updateArticles  from './articlesList';
import ArticleCard from './components/article_card';
import ArticlesList from './articlesList';

let pageArgument = '';
let showMore = 0;
let showMoreButton = t.getElementById('show-more-btn');
let selectPlatform = t.getElementById('slct-pltfrm');
let lastSearch = null;

async function setRoute() {
  showMore = 0;
  
  let path = window.location.hash.substring(1).split("/");
  pageArgument = path[1] || "";
  
  var pageContent = t.getElementById("pageContent");
  lastSearch = await routes[path[0]](pageArgument);
  
  return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());

t.getElementById('submit').addEventListener('keydown', async function(event) {
  if (event.keyCode == 13) {
    showMore = 0;
    
    let argument = `?search=${this.value}&ordering=-released&page_size=9`;
    console.log(this.value)
    lastSearch = await ArticlesList(argument);
  }
});

selectPlatform.addEventListener('change', async function() {
  showMore = 0;
  
  let argument = `?platforms=${this.value}&ordering=-released&page_size=9`;
  lastSearch = await ArticlesList(argument);
});

showMoreButton.addEventListener('click', async function() {
  // lastSearch = await  updateArticles(lastSearch.next);
  let first = await fetch(lastSearch.next);
  lastSearch =  await first.json();
  
  let row = document.querySelector('#pageContent .row');
  lastSearch.results.forEach(article => row.appendChild(ArticleCard(article)));
  
  showMore++;
  
  if (showMore >= 2) t.hideElement(this);
});