import {header, footer} from './components';
import {storeIcons} from './IconsArray'; 
import {formatDate} from './DefaultHome';
import {searcher} from './searcher';
import {getScreenshots} from './fetchGameDetails';
import {fetchSimilarGame} from './fetchSimilarGames';
import {fetchYoutube} from './fetchYoutube';

const PageDetails = (argument) => {
  const preparePage = () => {
    let cleanedArgument;
    cleanedArgument = argument.replace(/\s+/g, "-");


    const fetchGame = (url, argument) => {
      let finalURL = url + argument;

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          let {background_image, website,name,rating, ratings_count, description, released, developers, platforms, publishers, genres, tags, stores, clip, screenshots_count,slug} = response;

          if (background_image) {
            document.querySelector(".jumbotron").style.backgroundImage = `url(${background_image})`;
          }

          if (website) {
            document.querySelector(".jumbotron").innerHTML = `
              <a target="_blank" id="website" href="${website}" class="button d-flex flex-row justify-content-between">
                <p>Check website</p><i class="fas fa-play"></i>
              </a>`;
            }

            if (name) {
              document.getElementById("name").innerHTML = name;
            } 
  
            if (rating && ratings_count) {
              document.getElementById("rating").innerHTML = `${rating}/5 - ${ratings_count} votes`;
            }

            if (description) {
              document.getElementById("description").innerHTML = description;
            }

            if (released) {
              document.querySelector(".release").innerHTML = formatDate(released);
            } 

            if (developers) {
              let allDevelopers = '';
              developers.forEach((developer) => {
                allDevelopers += `<a class="studio" data-id="${developer.id}">${developer.name}</a><br>`;
              });
              document.querySelector(".developers").innerHTML = allDevelopers;
            }

            if (platforms) {
              let allPlatforms = ''; 
              platforms.forEach((platform) => {
                allPlatforms += platform.platform.name + ' , ';
              })
              document.querySelector(".platforms").innerHTML = allPlatforms;
            }

            if (publishers) {
              let allPublishers = '';
              publishers.forEach((publisher) => {
                allPublishers += publisher.name + ' ';
              })
              document.querySelector('.publishers').innerHTML = allPublishers;
            }

            if (genres) {
              let allGenres = '';
              genres.forEach((genre) => {
                allGenres += genre.name + ' ';
              })
              document.querySelector('.genres').innerHTML = allGenres;
            }

            if (tags) {
              let allTags = '';
              tags.forEach((tag) => {
                if (tag.language == 'eng'){
                  allTags += tag.name + ' ';
                }
              })
              document.querySelector('.tags').innerHTML = allTags;
            }

            if (clip) {
              document.querySelector(".trailer").innerHTML = `
              <video controls width="100%">      
                <source src="${clip.clip}"type="video/mp4">
                Sorry, your browser doesn't support embedded videos.
              </video>`;
            }

            if (stores) {
              let allStores = '';
              stores.forEach((store) => {
                allStores +=  `<a href="${store.url}" target="_blank">${store.store.name}</a>${storeIcons[store.store.slug]}<br>`;
              })
              document.querySelector('.stores').innerHTML = allStores;
            }

            if (screenshots_count > 0) {
              getScreenshots(`https://api.rawg.io/api/games/${slug}/screenshots`);
            }
            fetchYoutube(`https://api.rawg.io/api/games/${slug}/youtube`)
            fetchSimilarGame(`https://api.rawg.io/api/games/${slug}/suggested`)
        });
        
    };

    fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      ${header()}
        <div class="jumbotron"></div>
        <header>
          <div class="row d-flex justify-content-between align-items-end">
            <div class="col-lg-6 col-md-12 d-flex flex-row">
              <h1 id="name">...loading</h1>
            </div>
            <div class="col-lg-6 d-flex flex-row-reverse">
              <h2 id="rating">...loading</h2>
            </div>
          </div>
          <p id="description">...loading</p>
      </header>
      <section class="game-details">
        <br>
        <div class="row">
          <div class="col">
            <h3>Release</h3>
            <p class="release">...loading</p>
          </div>
          <div class="col">
            <h3>Developer</h3>
            <p class="developers">...loading</p>
          </div>
          <div class="col">
            <h3>Platforms</h3>
            <p class="platforms">...loading</p>
          </div>
          <div class="col">
            <h3>Publishers</h3>
            <p class="publishers">...loading</p>
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col">
            <h3>Genre</h3>
            <p class="genres">...loading</p>
          </div>
          <div class="col">
            <h3>Tags</h3>
            <p class="tags">...loading</p>
          </div>
        </div>
        <br>
        <div>
          <h2 class="my-5">BUY</h2>
          <p class="stores">...loading</p>
        </div>
        <div>
          <h2 class="my-5">TRAILER</h2>
          <p class="trailer">...loading</p>
        </div>
        <div>
          <h2 class="my-5">SCREENSHOTS</h2>
          <div id="screenshot" class="row"></div>
        </div>
        <div>
          <h2 class="my-5">YOUTUBE</h2>
          <div id="youtube" class="row">...loading</div>
          <div id="youtube-mini" class="row"></div>
        </div>
        <div>
          <h2 class="my-5">SIMILAR GAMES</h2>
          <p class="similar row">...loading</p>
        </div>
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
  };

  render();
};

export {PageDetails};