const root = "http://api.dataatwork.org/v1/";

const fetchData = (url, searchCriteria) => fetch(`${root}${url}${searchCriteria}`);

const jobsAPI = {
  fetchData,
};

export default jobsAPI;
