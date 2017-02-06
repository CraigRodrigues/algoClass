/*
INSERTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, compare value of element with previous elements and swap positions if previous element is larger.

example:
[ 3 4 5|1 2 6 ]
 sorted|unsorted
swaps:
[ 3 4 1 5|2 6 ]
[ 3 1 4 5|2 6 ]
[ 1 3 4 5|2 6 ]
now repeat for next unsorted element

[3, 1, 2, 4, 9, 5, 7]

*** Exercises

- Implement insertion sort for array of numbers
- Identify time complexity

*/

function insertionSort(arr) {
  let target;
  let i;
  let j;
  // Start at the 2nd element in the array
  for (i = 1; i < arr.length; i++) {
    // set target
    target = arr[i];
    // iterate over the unsorted part of the array
    for (j = i - 1; j > -1 && arr[j] > target; j--) {
      // we will iterate backwards in the unsorted porition of the array
      // if we hit -1 we are done
      // if the unsorted element is bigger than our target we need to shift our unsorted element over one space
      arr[j + 1] = arr[j];
    }
    // at this point j should be one less than where we want the target
    arr[j + 1] = target;
  }

  return arr;
}

console.log(insertionSort([5, 2, 6, 1, 3, 9]));

/*

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)

*/
