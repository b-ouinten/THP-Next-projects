import './searcher.scss';
import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../../redux';
import SearchContext from '../../context';
import Form from '../form/form';
import NewsDisplayer from '../newsDisplayer';

const Searcher = () => {
  const newsState = useSelector((state) => state.newsState);
  // eslint-disable-next-line no-unused-vars
  const { news } = newsState;
  const dispatch = useDispatch();

  const search = useContext(SearchContext);
  const {
    keywords, source, setKeywords, setSource,
  } = search;

  const handleChange = (e) => setKeywords(e.target.value);
  const handleSelect = (e) => {
    setSource(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchNews(`everything?sources=${source}&q=${keywords}&sortBy=publishedAt`));
  };

  return (
    <>
      <Form onSelect={handleSelect} onChange={handleChange} onSubmit={handleSubmit} />
      <NewsDisplayer news={news} />
    </>
  );
};

export default Searcher;
