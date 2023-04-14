// We first need to create two factory functions: one for the full list
// and other for each node.

// Let's start defining our nodes: we will create them with a value and 
// an empty pointer to the next node.

function Node(value, next = null) {
    this.value = value;
    this.next = next;

    return {value, next};
};

// Now we start with out linked list: we will create an empty list first,
// with a null head variable and a size of 0.

// When we append a value we will create the node and look for the head pointer.
// If there is no head we will asign the new node as it, and if there is one we
// will store it in a temp variable. We will iterate through the list until there
// is no more 'next' properties and then will append the new node.

// If we want to append a value at the beginning of the list, first we need to 
// create the node, then we define that the next node of the new one will be the head
// node we had before, and reasign the head value to the new node.

// Let's add a function to get a node using an index. Linked lists don't use indexes
// to access their elements but we can simulate them.

function linkedList() {
    this.head = null;
    this.tail = null;
    let size = 0;

    // Functions:

    const append = function (value) {    
        let temp = 0;
        let node = new Node(value);

        if (!this.head) {
            this.head = node;
        } else {
            temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = node;
        }
        this.tail = node;

        size += 1;

    };

    
    const prepend = function (value) {
        let node = new Node(value);

        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        size += 1;
    };

    const at = function (index) {
        let node = this.head;

        for (let i = 1; i < index; i++) {
            node = node.next;
        }
        
        return node;
    };

    const tellSize = function () {
        return `The linked list has ${size} nodes.`
    };

    return {append, prepend, tellSize, at};
};




let list = new linkedList();
list.append(40);
list.append(50);
console.log(list);
list.prepend(56);
console.log(list);
console.log(list.tellSize())
console.log(list.at(2));
