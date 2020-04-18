# Algorithms

### Linear Sort

- [Insertions Sort in JS](https://gist.github.com/mitrakmt/9e1b3440db54daa78bd9a4db0ceea3c1#file-insertionsort-js)
- [Good explanation](https://initjs.org/insertion-sort-in-javascript-6c48563b4643)

```javascript
const insertionSort = (array) => {
  const length = array.length;

  for (let i = 1; i < length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return array;
};
```

### Merge Sort

- [Merge Sort in JS](https://github.com/yeb9925/sorting-algorithms-javascript/blob/master/src/merge_sort/merge_sort_recursion.js#L5)
- [Good explanation](https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060)

```javascript
// Merge Sort Implentation (Recursion)

function mergeSort(unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(mergeSort(left), mergeSort(right));
}

// Merge the two arrays: left and right
function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat to the resultArray because there will be one element left over after the while loop
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}
```
