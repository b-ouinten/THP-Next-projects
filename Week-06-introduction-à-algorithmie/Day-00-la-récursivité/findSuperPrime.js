function findSuperPrime(N) {
  function isPrimeNumber(num) {
    function test(n) {
      if (n === 1) return true;
      if (num % n === 0) return false;
      return test(n - 1);
    }
    
    const n0 = Math.trunc(num / 2);
    return test(n0);
  }

  function test(v) {
    if (isPrimeNumber(v)) return v;
    return test(v + 1);
  }

  const v0 = N;
  return test(v0);
}

console.log(findSuperPrime(15));