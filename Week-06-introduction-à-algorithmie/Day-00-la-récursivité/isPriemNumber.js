function isPrimeNumber(x) {

  function isIt() {
    function test(n) {
      if (n === 1) return true;
      if (x % n === 0) return false;
      return test(n - 1);
    }

    const n0 = Math.trunc(x / 2);
    return test(n0);
  }
  
  return `${isIt()? 'Yes' : 'No'}, ${x} is${isIt()? '' : '\'nt'} a prime number.`
}

console.log(isPrimeNumber(10));