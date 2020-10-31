import dayjs from 'dayjs';
import ArticlesList from './articlesList';

export default async function Home(argument = "") {
  let now = dayjs().format('YYYY-MM-DD');
  let yearLater = dayjs().add(1, 'year').format('YYYY-MM-DD');
  return ArticlesList(`?dates=${now},${yearLater}&ordering=-added&page_size=9`);
};