const url = 'http://localhost:1337/articles';

const fetchArticles = (searchCriteria = '') => fetch(`${url}${searchCriteria}`)
  .then((response) => response.json());

const ArtcilesAPI = {
  fetchArticles,
};

export default ArtcilesAPI;
