function computePowerIt(n, p) {
  if (p<0) return 0;
  power = 1;
  for (let i=0; i<p; i++)
    power *= n;
  return power;
}

function computePowerRec(n, p) {
  if (p<0) return 0;
  if (p===1) return n;
  return n * computePowerRec(n, p-1);
}

console.log('Iterative', computePowerIt(-2, -3));
console.log('Recursive', computePowerRec(-2, -3));