const computeFactorialIt = (n) => {
  if (n<0) return 0;
  let factorial = 1;
  for (let i=n; i>0; i--)
  factorial = factorial * i;
  return factorial;
}

const coputeFactorialRec = (n) => {
  if (n<0) return 0;
  if (n===0) return 1;
  return n * coputeFactorialRec(n - 1);
}

console.log('Iterative', computeFactorialIt(0));
console.log('Recursive', coputeFactorialRec(0));