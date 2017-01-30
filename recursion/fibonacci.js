/*

Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.

Fibonnaci's sequence:
input    0 1 2 3 4 5 6  7  8  9 ...
output   0 1 1 2 3 5 8 13 21 34 ...

What is the time complexity? Can you think of optimizing your solution? (Hint: look up dynamic programming)
*/

const fibonnaci = function(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonnaci(n-1) + fibonnaci(n - 2);
  }
}

// Dynamic Programming memoization with an array
const fibDP = function(n) {
  let cache = [0, 1]

  function fibonnaci(m) {
    if (cache[m] === undefined) {
      cache[m] = fibonnaci(m - 1) + fibonnaci(m - 2);
    }

    return cache[m];
  }

  return fibonnaci(n);
}