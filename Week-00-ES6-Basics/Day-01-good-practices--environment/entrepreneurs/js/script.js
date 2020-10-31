const firstLastOnly = entrepreneurs.map (entrepreneur => {
  return {first: entrepreneur.first, last: entrepreneur.last};
});

const withAge = entrepreneurs.map (entrepreneur => {
  return {first: entrepreneur.first, last: entrepreneur.last, Age: 2020 - entrepreneur.year};
});

const morePretty = entrepreneurs.map (entrepreneur => {
  return {firstName: entrepreneur['first'], lastName: entrepreneur['last'], Age: 2020 - entrepreneur['year']}
});

const year70 = entrepreneurs.filter (entrepreneur => entrepreneur.year >= 1970 && entrepreneur.year < 1980);