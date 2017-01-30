/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

const flatten = function(array) {
  let flattened = [].concat(...array);
  const isFlat = function(array) {
    return flattened.some(function(arr) {
    return Array.isArray(arr);
    });
  }

  if (isFlat(flattened)) {
    return flatten(flattened);
  } else {
    return flattened;
  }
}