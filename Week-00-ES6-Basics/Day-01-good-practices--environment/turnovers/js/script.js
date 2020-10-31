const turnoversAcc = (acc, user) => acc + user.revenue;

let totalTurnover = users.reduce(turnoversAcc, 0);
let averageTurnover = totalTurnover / users.length;
console.log('Average turnover : ', Math.floor(averageTurnover), 'euro');

const f1 = user => user.revenue > 0;
let usersBringing = users.filter(f1);

let usersBringingRate = (usersBringing.length / users.length) * 100;

let usersBringingAverageTurnover = users.filter(f1).reduce(turnoversAcc, 0) / usersBringing.length;
console.log('Users bringingg average turnover : ', Math.floor(usersBringingAverageTurnover), 'euro');

console.log('We bring : ', totalTurnover, 'euro');

const f2 = (user, index, ary, country) =>  { return user.country == country };

let frenchUsers = users.filter((user, index, ary) => f2(user, index, ary, 'France'));
let frenchUsersBringing = frenchUsers.filter(f1);
let frenchUsersBringingNumber = frenchUsersBringing.length;
console.log('Number of french users bringing : ', frenchUsersBringingNumber);

let franceTurnover = frenchUsers.reduce(turnoversAcc, 0);
console.log('France turnover : ', franceTurnover, 'euro.')

let UsUsers = users.filter((user, index, ary) => f2(user, index, ary, 'United States'));
console.log('United States users number : ', UsUsers.length);
let UsUsersTurnover = UsUsers.reduce(turnoversAcc, 0);
console.log('United States users turnover : ', UsUsersTurnover, 'euro');

const f3 = (item, index, ary) => ary.indexOf(item) === index;
const unique = (unique, item) => unique.includes(item) ? unique : [ ...unique, item];
// let countriesBringing = usersBringing.map(user => user.country).filter(f3);
let countriesBringing = usersBringing.map(user => user.country).reduce(unique, []);
console.log('Countries in which we brought money :', countriesBringing);

let aryCopy = [...usersBringing];
let usersMostBringing = usersBringing.reduce((acc) => {

  let mostBringing = aryCopy.reduce((most, item) => most.revenue > item.revenue ? most : item, aryCopy[0]);

  aryCopy = aryCopy.filter(item => item.id != mostBringing.id);
  
  acc.push(mostBringing);

  return acc;
}, []);

let fiveUsersMostBringing = usersMostBringing.slice(0, 5);

console.log(fiveUsersMostBringing);

const turnoverBySex = (acc, item, index, ary, sex) => item.sex == sex ? (acc + item.revenue) : acc;
let menTurnover = usersBringing.reduce((acc, item, index, ary) => turnoverBySex(acc, item, index, ary, 'M'), 0);
let womenTurnover = usersBringing.reduce((acc, item, index, ary) => turnoverBySex(acc, item, index, ary, 'F'), 0);

console.log('Women turnover :', womenTurnover, 'euro.', 'Men turnover :', menTurnover, 'euro.');

console.log('Did women bring the most ? ', womenTurnover > menTurnover);