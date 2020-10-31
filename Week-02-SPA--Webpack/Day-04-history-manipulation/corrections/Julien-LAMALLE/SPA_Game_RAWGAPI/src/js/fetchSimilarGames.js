import {platformsIcons} from './IconsArray';
import {formatDate} from './DefaultHome';
import {showInfo, hideInfo} from './DisplayGameInfo';
import {addCreators, seePlatform} from './GetStudio'

const fetchSimilarGame = (url) => {
  let similarGames = '';

  fetch(`${url}`)
    .then(response => response.json())
    .then(response => {
      for(let i= 0; i < 6; i++){
        let article = response.results[i];
        let genres = '';
        if (article.genres) {
          article.genres.forEach((genre) => {
            genres += " " + genre.name;
          });
        };
        let platforms = '';
        if (article.parent_platforms) {
          article.parent_platforms.forEach((platform) => {
            let icon = platformsIcons[platform.platform.slug];
            platforms += icon;
          });
        }
        similarGames += `
        <div class='cardGame card text-white h-100 col-lg-4'>
            <img src="${article.background_image}" class="cover card-img-top" alt="${article.name}-cover">
            <div class="game-infos card-img-top not-visible">
              <h3>${formatDate(article.released)}</h3>
              <h3 class="creators">${article.slug}</h3>
              <h4>${article.rating}/5 - ${article.ratings_count} votes</h4>
              <p>${genres}</p>
            </div>
            <div class="card-body">
              <h2><a href = "#pagedetails/${article.slug}"class="card-title">${article.name}</a></h2>
            </div>
            <div class="card-footer">
              <p class="d-flex align-items-center">${platforms}</p>
            </div>
          </div>
        `;
      }
      document.querySelector(".similar").innerHTML = similarGames;
      document.querySelectorAll(".cover").forEach((img) => {
        img.addEventListener("mouseover", showInfo);
      });
      document.querySelectorAll(".game-infos").forEach((img) => {
        img.addEventListener("mouseleave", hideInfo);
      });
      addCreators();
      document.querySelectorAll(".card-footer p").forEach((footer) => {
        for (let i = 0; i < footer.children.length; i++) {
          footer.children[i].addEventListener("click", seePlatform);
        }
      });
    });
}

export {fetchSimilarGame}