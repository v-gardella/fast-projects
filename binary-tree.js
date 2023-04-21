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

function Tree(array) {
    let newArray = [];
    array.forEach((item) => {
        if (!newArray.includes(item)) {
            newArray.push(item);
        }
    })

    let sortedArray = mergeSort(newArray);
    
    this.root = buildTree(sortedArray, 0, sortedArray.length);

    // Functions

    function buildTree(array, start, end) {
        let newNode = null;

        if (start > end) {
            return null;
        };

        if (array.length === 0) {
            return null;
        }

        let middle = Math.floor((start + end) / 2);
        newNode = new Node(sortedArray[middle]);

        if (array[middle] === undefined) {
            return null;
        }
    
        newNode.left = buildTree(sortedArray, start, middle - 1);
        newNode.right = buildTree(sortedArray, middle + 1, end);
    
        return newNode;
    }

    const find = function (value) {
        let node = this.root;

        if (this.root === null) {
            return this.root;
        }

        while (node) {
            if (node.value === value) {
                return node;
            }
            else if (node.value > value) {
                node = node.left;
            }
            else if (node.value < value) {
                node = node.right;
            }
            
            if (node.value !== value && node.right === null && node.left === null) {
                console.log('ERROR: NODE NOT IN TREE')
                return null;
            }
        }
    };

    const insertNode = function (value) {
        let node = this.root;
        let temp = null;
        let newNode = new Node(value);

        if (this.root === null) {
            this.root = node;
        };

        while (node) {
            if (node.value > value) {
                temp = node;
                node = node.left
            }
            else if (node.value < value) {
                temp = node;
                node = node.right;
            }
        }

        if (temp.value > value) {
            temp.left = newNode;
        }
        else if (temp.value < value) {
            temp.right = newNode;
        }
    };

    const deleteNode = function (value) {
        let node = this.root;
        let parent = null;

        if (this.root === null) {
            return this.root;
        }

        // Search for the node and parent:
        function getNodes(value) {
            while (node) {
                if (node.value === value) {
                    return [node, parent];
                }
                else if (node.value > value) {
                    parent = node;
                    node = node.left;
                }
                else if (node.value < value) {
                    parent = node;
                    node = node.right;
                }
                
                if (node.value !== value && node.right === null && node.left === null) {
                    console.log('ERROR: NODE NOT IN TREE')
                    return null;
                }
                
            }
        }

        [node, parent] = getNodes(value);
    }

    return {
        root: this.root,
        find: find,
        insertNode: insertNode,
        deleteNode: deleteNode
    };
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

let prueba = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
//let prueba = [1, 5, 8, 14, 20];
let newTree = new Tree(prueba);

console.log(newTree.deleteNode(23));
//console.log(newTree.root.right);
