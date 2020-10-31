import {header, footer} from './components';
import {platformsIcons} from './IconsArray'; 
import {defaultHome, formatDate} from './DefaultHome';
import {searcher} from './searcher';
import {showInfo, hideInfo} from './DisplayGameInfo';
import {addCreators, seePlatform} from './GetStudio'

const PageList = (argument = "") => {

  let articlesCounter = 0;

  const addOptions = () => {
    let selector = document.getElementById('platforms');
    fetch("https://api.rawg.io/api/platforms/lists/parents")
    .then((response) => response.json())
    .then((response) => {
      response.results.forEach(platform => {
        selector.innerHTML += `<option value='${platform.id}'>${platform.name}</option>`;
      });
    });

    const selectPlatform = () => {
      let platformId = selector.value;
      let thisPlatform = `?parent_platforms=${platformId}&page_size=27`;
      return PageList(thisPlatform);
    };

    selector.addEventListener('change', selectPlatform)
  }

  const showMore = () => {
    let count = articlesCounter;
    let articles = new Array();
    document.querySelectorAll('.cardGame').forEach(article => {
      articles.push(article);
    });

    for (let i = count; i < count + 9; i++) {
      articles[i].classList.remove("not-visible");
      articlesCounter++;
    }
    if (articlesCounter >= 27) {
      document.querySelector(".button").style.display = "none";
    }
  }

  const preparePage = () => {
    let cleanedArgument;
    cleanedArgument = argument.replace(/\s+/g, "-");
    let articles = "";

    const fetchList = (url, argument) => {
      let finalURL = url;
      if (argument) {
        url = "https://api.rawg.io/api/games"; 
        finalURL = url + argument;
      }

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then(response => {
          console.log(response);
          return response
        })
        .then((response) => {
          response.results.forEach((article) => {
            let genres = '';
            if (article.genres) {
              article.genres.forEach((genre) => {
                genres += " " + genre.name;
              });
            };
            let platforms = '';
            let filters = '';
            if (article.parent_platforms) {
              article.parent_platforms.forEach((platform) => {
                filters += platform.platform.name + " ";
                let icon = platformsIcons[platform.platform.slug];
                platforms += icon;
              });
            } 
            let filterDiv = `<div class='cardGame card text-white h-100 col-lg-4 ${filters}'>`;
            if (articlesCounter > 8) {
              filterDiv= `<div class='cardGame card text-white h-100 col-lg-4 ${filters} not-visible'>`;
            }
            articles += `
              ${filterDiv}
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
            articlesCounter++
          });
          document.querySelector(".page-list .articles").innerHTML = articles;
          if (articlesCounter > 8) {
            document.getElementById("showmore").innerHTML = `<p class="button">Show more</p>`;
            document.querySelector(".button").addEventListener("click", showMore);
          }
          articlesCounter = 9;
          document.querySelectorAll('.cover').forEach((article) => {
            article.addEventListener('mouseover', showInfo);
          });
          document.querySelectorAll(".game-infos").forEach((article) => {
            article.addEventListener('mouseleave', hideInfo);
          });
          addCreators();
          document.querySelectorAll('.card-footer p').forEach(platform => {
            for (let i = 0; i < platform.children.length; i++) {
              platform.children[i].addEventListener("click", seePlatform);
            }
          })
        });
    };
    
    let dates = defaultHome();

    fetchList(`https://api.rawg.io/api/games${dates}&page_size=27`, cleanedArgument);
    if (window.onload) {
      const reloadLink = document.getElementById('reload');
      reloadLink.onclick = PageList(`${dates}&page_size=27`)
    }
  };

  const render = () => {
    pageContent.innerHTML = `
      ${header()}

      <header>
        <h1>Welcome,</h1>
        <p>The Hyper Progame is the world's premier event for computer and video games and related products. At The Hyper Progame, the video game industy's top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brightest, and most innovative in the interactive entertainment industy. For three exiting days, leading-edge compagnies, groundbrealing new technologies, and never-before seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure</p>
        <div class="btn-platforms">
          <select id="platforms" name="platformlist">
            <option value="any">Platform : Any</option>
          </select>
          <i class="fas fa-caret-square-down"></i>
        </div>  
      </header>

      <section class="page-list">
        <div class="articles row">...loading</div>
        <div id="showmore" class="d-flex justify-content-center text-center mb-3"></div>
      </section>

      ${footer()}
    `;
    document.querySelector(".form-control").addEventListener("keydown", (event) => {
      let input = document.getElementById("findgame").value;
      if (event.code == "Enter") {
        event.preventDefault();
        if(input.length > 3) {
          searcher();
        }
      }
    });
    preparePage();
    addOptions();
  };
  render();
};

export {PageList};