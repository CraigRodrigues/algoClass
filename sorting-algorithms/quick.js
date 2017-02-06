/*
QUICK SORT

*** Description

Like merge sort, quick sort employs a divide and conquer strategy.

It has a partitioning step, in which you pick an element (called a pivot) and partition the array so that all smaller elements come before pivot and all larger elements come after. The pivot will be in its final position. Recursively apply this to the subarray of smaller elements and the subarray of larger elements.

*** Exercises

- Write a partition helper function. For choice of pivot, for a basic implementation, we recommend choosing either the first or last element in the subarray. If you need hints, look up the Lumoto partiton scheme. Test this out before moving forward!
- Implement quicksort
- Identify time complexity

- Consider implications for choice of pivot (https://en.wikipedia.org/wiki/Quicksort#Choice_of_pivot)

*** Extra Credit

Variants:
- Implement a multi-pivot quicksort (ex: partition into 3 subarrays using 2 pivots)

*/

const quickSort = function (collection, left = 0, right = collection.length - 1) {

};

const swap = function (collection, firstIndex, secondIndex) {
  let temp = collection[firstIndex];
  collection[firstIndex] = collection[secondIndex];
  collection[secondIndex] = temp;

  return collection;
};

const partition = function (collection, left, right) {
  // pivot is the middle of the left and right indexes
  let pivot = collection[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  // Keep looping until our points meet
  while (i <= j) {
    // move left point until a value greater than pivot is found
    while (collection[i] < pivot) {
      i++;
    }
    // move right pointer until a value less than the pivot is found
    while (collection[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(collection, i, j);
      i++;
      j--;
    }
  }
  console.log(collection);
  return i;
};

console.log(partition([4, 2, 6, 5, 3, 9], 0, 5));