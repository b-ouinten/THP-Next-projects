const url = 'http://newsapi.org/v2/';
const apiKey = 'f9c727a6fdb443be90f527b8fa794187';

const fetching = (criteria) => fetch(`${url}${criteria}&apiKey=${apiKey}`)
  .then((response) => response.json());

const newsAPI = {
  fetching,
};

export default newsAPI;
