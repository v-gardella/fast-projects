// We create a function that splits out array until we get n subarrays of length 1.

// If our array is of length 1 we return the same array; if it's bigger, 
// we split it in halves and call on each halve the function Merge().

function mergeSort(arr) {
    if (arr.length < 2) return arr;
    if (arr.length > 1) {
        const mid = Math.floor(arr.length/2);
        let leftArr = arr.slice(0, mid);
        let rightArr = arr.slice(mid, arr.length)
        return Merge(mergeSort(leftArr), mergeSort(rightArr))
    }
}

// Now we create the sorting algorithm: if both arrays have elements
// inside then the program will compare them and push the smallest one
// into the sorted array until one of them empties. Finally, the rest of the
// elements in the other subarray will be appended to the array.

function merge(left, right) {
    let sortedArr = [] // the sorted items will go here
    while (left.length && right.length) {
      // Insert the smallest item into sortedArr
      if (left[0] < right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }
    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right]
  }
  merge([1, 4], [2, 6, 9]) // [1, 2, 4, 6, 9]