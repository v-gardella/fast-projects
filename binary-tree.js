// Balanced Binary Tree construction:

// We'll start defining a factory function for nodes. It will 
// store the asigned value and its children (these will be asigned 
// when the algorithm creates the tree, not before).

function Node(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

// Then we create the tree factory function and the tree construction
// function.

// First we define the root by selecting the middle element in the array.
// 

function buildTree(array, start, end) {
    let newArray = [];
    array.forEach((item) => {
        if (!newArray.includes(item)) {
            newArray.push(item);
        }
    })

    let sortedArray = mergeSort(newArray);

    if (start > end) {
        return null;
    };

    let middle = Math.floor((start + end) / 2);
    let newNode = new Node(array[middle]);

    newNode.left = buildTree(sortedArray, start, middle - 1);
    newNode.right = buildTree(sortedArray, middle + 1, end);

    return console.log(newNode);
}

// Let's add a Merge Sort script to order the array.

function mergeSort(arr) {
    if (arr.length < 2) return arr;
    if (arr.length > 1) {
        const mid = Math.floor(arr.length/2);
        let leftArr = arr.slice(0, mid);
        let rightArr = arr.slice(mid, arr.length)
        return merge(mergeSort(leftArr), mergeSort(rightArr))
    }
}

function merge(left, right) {
    let sortedArr = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }

    return [...sortedArr, ...left, ...right]
}


// Function Calls


let prueba = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 50];
console.log(buildTree(prueba, 0, prueba.length));