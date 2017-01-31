/*
Bubble SORT

*** Description

Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array

*** Exercises

- Implement bubble sort
- Identify time complexity

*/

// Is it possible to make a separate swapping function in JS?

function bubbleSort(arr) {
  // do-while loop so we can try to sort at least once. Continue while swaps is true (flag)
  // iterate over array and swap elements (iterate to the next to last element)
    // swap elements if the first element is greater than the second
    // if equal or less than do nothing
    // If a swap was needed change our flag to true

  let swaps;
  do {
    // set flag to false to start
    swaps = false;
    let j = 1;
    // to make it more adaptive we can have another counter that stops the loop at the last sorted element
    for (let i = 0; i < arr.length - j; i++) {
      if (arr[i] > arr[i + 1]) {
        // swap elements
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        // we made a swap, so flip our flag to true
        swaps = true;
      }
    }
    j++;
  } while (swaps) // do the loop again if our flag became true

  return arr;
}

 /*
Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.

// Time complexity for nearly sorted arrays is still n^2 despite any early or unnecessary checking of elements.

Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)

*/
