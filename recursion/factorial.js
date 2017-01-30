/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/
const factorial = function(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}