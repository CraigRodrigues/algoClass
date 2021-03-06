/*
MERGE SORT

*** Description

Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.

Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).

Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.

*** Exercises

- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

Optimization:
- Refactor your iterative solution to be a natural merge sort. This means that the initial subarrays are naturally occurring sorted sequences. How does this impact time complexity and adaptivity?
ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]

*/

// Implement recursive merge sort (you might want to write a helper function to handle the merge step)

function merge(arr1, arr2) {
  let result = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      let target = arr1.splice(0, 1);
      result.push(target[0]);
    } else {
      let target = arr2.splice(0, 1);
      result.push(target[0]);
    }
  }
  if (arr1.length === 0) {
    result.push(...arr2);
  } else {
    result.push(...arr1);
  }

  return result;
}

function recursiveMergeSort(list) {
  // Base
  if (list.length < 2) {
    return list;
  }
  // Break list in half
  let leftList = list.splice(0, Math.floor(list.length/2));
  let rightList = list;
  // Call merge sort on each list
  let leftMerged = recursiveMergeSort(leftList);
  let rightMerged = recursiveMergeSort(rightList);
  // Merge two lists
  return merge(leftMerged, rightMerged);
}

// - Implement iterative merge sort

// Step 1 - Map every element in the array into it's own array element
// Create a results array to hold out merge
// Step 2 - Create a while loop that will continue to merge adjacent element arrays
// Step 3 - If our newly merged array has a length > 1 merge it again
// Step 4 - Return results

function iterativeMerge(list) {
  let splitList = list.map(item => [item]);

  while (splitList.length > 1) {
    let results = [];
    for (let i = 0; i < splitList.length; i += 2) {
      splitList[i + 1] !== undefined ? results.push(merge(splitList[i], splitList[i + 1])) : results.push(splitList[i]);
    }
  splitList = results;
  }
  return splitList[0];
}