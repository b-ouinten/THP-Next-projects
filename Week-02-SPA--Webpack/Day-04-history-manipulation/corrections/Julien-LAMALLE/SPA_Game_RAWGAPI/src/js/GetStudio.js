import {PageList} from './PageList';

const addCreators = () => {
  let creators = document.querySelectorAll(".creators");
  creators.forEach((creator) => {
    let slug = creator.innerHTML;
    fetch(`https://api.rawg.io/api/games/${slug}`)
      .then((response) => response.json())
      .then((response) => {
        let toInsert = "";
        if (response.developers) {
          response.developers.forEach((developer) => {
            toInsert += `<a class="studio" data-id="${developer.id}">${developer.name}</a><br>`;
          });
        }
        creator.innerHTML = toInsert;
      });
  });
  setTimeout(() => {
    document.querySelectorAll(".studio").forEach((link) => {
      link.addEventListener("click", seeStudio);
    });
  }, 1000);
};

const seeStudio = (event) => {
  let studioId = event.target.dataset.id;
  let studio = `?developers=${studioId}&page_size=27`;
  return PageList(studio);
};

const seePlatform = (event) => {
  let platformId = event.target.dataset.id;
  let platform = `?parent_platforms=${platformId}&page_size=27`;
  return PageList(platform);
};

export {addCreators, seeStudio, seePlatform}
