import * as t from '../tools';

export default function ArticleCard(article) {
  let card = document.createElement('div');
  let {id, name, slug, background_image, platforms} = article;
  card.className = 'col-md-4 mb-5';
  card.innerHTML = ` 
    <img src=${background_image} width="100%" height="225" class="gm-img">
    <div id="add-info">
    </div>
    <div class="d-flex flex-column justify-content-between align-items-start mt-3">
      <a href = "#game/${slug}" class="gm-ttl text-decoration-none mb-1">${name}</a>
      <div id="icons" class="d-flex align-items-center w-75 mt-2"></div>
    </div>`
  
  // Prepare html for icons depending on the game platforms
  const peers = [
    {
      regex: /.*linux.*/,
      svg: 'linux'
    },
    {
      regex: /.*apple.*/,
      svg: 'mobile'
    },
    {
      regex: /.*playstation.*/,
      svg: 'ps'
    },
    {
      regex: /.*switch.*/,
      svg: 'switch'
    },
    {
      regex: /.*windows.*/,
      svg: 'windows'
    },
    {
      regex: /.*xbox.*/,
      svg: 'xbox'
    },
  ]
  
  let svgNames = platforms.map(platform => peers.filter(per => per.regex.test(platform.platform.slug)))
                  .flat()
                    .reduce((acc, item, index, ary) => (ary.indexOf(item) == index) ? [...acc, item] : acc, [])
                      .map(item => item.svg);
  
  let iconsTag = '';
  svgNames.forEach(item => {
    iconsTag += `<img src="./src/images/${item}.svg" class="gm-img mr-2"/>`
  });
  
  card.querySelector('div #icons').innerHTML = iconsTag;
  
  // Get and show additional informations on hover article
  let img = card.querySelector('img');
  let addInfo = card.querySelector('#add-info');

  async function getAddInfo(url) {
    let first = await fetch(url);
    let final =  await first.json();
    return final;
  }
  
  img.addEventListener('mouseover', function() {
    let url = `https://api.rawg.io/api/games/${id}`;
    getAddInfo(url).then((result) => {
      let {released, developers, genres, rating, rating_top, ratings_count} = result;
      let html = `
        <p class="medium-regular-p">${dayjs(released).format('MMM D, YYYY')}</p>
        <p class="medium-bold-p">${developers.map(developer => developer.name).join(', ')}</p>
        <p class="medium-bold-p">${rating}/${rating_top} - ${ratings_count}</p>
        <p class="smaller-regular-p">${genres.map(genre => genre.name).join(', ')}</p>
      `
      addInfo.innerHTML = html;
  
      t.hideElement(this);
      t.showElement(addInfo);

      // anime({
      //   targets: card,
      //   scaleY: 1.1
      // })
    });
  });
  
  addInfo.addEventListener('mouseleave', function() {
    t.hideElement(this);
    t.showElement(img);

    // anime({
    //   targets: card,
    //   scaleY: 1
    // })
  });
  
  return card;
}