import dayjs from 'dayjs';

const defaultHome = () => {
  let today = dayjs();
  let month = today.month() + 1;
  let year = today.year();
  let day = today.date();
  let nextYear = `${year + 1}-${month}-${day}`
  let now = `${year}-${month}-${day}`;
  
  return `?dates=${now},${nextYear}&ordering=-added`;
};

const formatDate = date => {
  return dayjs(date).format('D MMMM YYYY')
}

export {defaultHome, formatDate};