import './home.scss';
import React, { useEffect, useState } from 'react';
import ArticlesAPI from '../../api/articlesAPI';
import ArticleCard from './articleCard';

const Home = () => {
  const [articles, setArticles] = useState(null);
  const { fetchArticles } = ArticlesAPI;

  const getArticles = () => fetchArticles()
    .then((result) => setArticles(result))
    .catch((error) => console.log(error));

  useEffect(
    () => getArticles(),
    [],
  );

  return (
    <section>
      {
        articles && (
          articles.map((article) => <ArticleCard key={article.id} article={article} />)
        )
      }
    </section>
  );
};

export default Home;
