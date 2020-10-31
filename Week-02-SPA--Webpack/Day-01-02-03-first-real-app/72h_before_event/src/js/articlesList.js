import ArticleCard from './components/article_card'

export async function updateArticles(url, updateList, el = document.querySelector("#pageContent .row")) {
  let first = await fetch(url);
  let final = await first.json();
  if (updateList) final.results.forEach(article => el.appendChild(ArticleCard(article)));
  return final;
};

async function prepareUrl(argument, updateList) {
  let url = 'https://api.rawg.io/api/games';
  
  let cleanAgrement = argument.replace(/\s+/g, "-");
  if (cleanAgrement) url += cleanAgrement;
  
  let row = document.querySelector("#pageContent .row");
  if (updateList) row.innerHTML = '';

  return updateArticles(url, updateList);
};

async function render(argument, updateList) {
  pageContent.innerHTML = `
    <div class="row">...loading</div>
  `;

  return prepareUrl(argument, updateList);
};

export default async function ArticlesList(argument = "", updateList = true) {
  return render(argument, updateList);
};