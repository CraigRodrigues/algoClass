/*
SELECTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, find the smallest element in unsorted subarray starting at that position, and swap elements so that smallest element is at the beginning of unsorted subarray.

example:
[ 1 2 3|9 5 7 4 ]
 sorted|unsorted
smallest element in unsorted subarray is 4
swap with element at beggining of unsorted subarray
sorted portion has now grown:
[ 1 2 3 4|5 7 9 ]

[3, 1, 2, 4, 9, 5, 7]

*** Exercises

- Implement selection sort
- Identify time complexity

*/

function selectionSort(arr) {

// Find the smallest element in array
// Swap it with the first element of our sub-array
// Continue this until we have no elements left in our sub-array to look at

  let pivot = 0;
  while (pivot < arr.length) {
    // find smallest value in unsorted part of array
    let minIndex = pivot;
    for (let i = pivot; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }
    // once we have found our smallest value then swap taht value with the front of the unsorted list
    let temp = arr[pivot];
    arr[pivot] = arr[minIndex];
    arr[minIndex] = temp;

    // increment the pivot
    pivot++
  }

  return arr;
}

/*

Stable Variant
- Implement as a stable sort - rather than swapping, the minimum value is inserted into the first position and all other items are shifted one to the right. How does this impact performance?
- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

- Implement selection sort for a linked list (you can use your data structure implemention from earlier in the course). How does this impact performance and stability?

*/
