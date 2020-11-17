function computeSquareRoot(x) {
  const epsilon = 0.0001;
  
  function closeEnough(a, b) {
    return Math.abs(a - b) < epsilon;
  }
  
  function betterGuess(guess) {
    return (guess + x/guess) / 2;
  }
  
  function test(guess) {
    if (closeEnough(x/guess, guess)) return guess;
    return (test(betterGuess(guess)));
  }

  return test(x);
}

console.log(computeSquareRoot(2));
console.log(Math.sqrt(2));