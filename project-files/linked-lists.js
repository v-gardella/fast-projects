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

// Our function pop will recognize the third to last node, select the second to last
// and asign it as the tail, and then replace the value of the last node with null.

// The function contains will iterate the linked list looking for a value, returning
// the corresponding true or false value. The function fin, on the other side, works in 
// a similar way but defining a counter to simulate an index and returns this value.


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
        let temp = this.head;

        for (let i = 1; i < index; i++) {
            temp = temp.next;
        }
        
        return temp;
    };


    const pop = function () {
        let temp = this.head;

        if (!this.head) {
            return this.head;
        }

        if (!temp.next) {
            temp = null;
        }

        if (!temp.next.next) {
            this.tail = temp;
            temp.next = null;
        }

        else {
            while (temp.next.next) {
                temp = temp.next;
            }
            this.tail = temp;
            temp.next = null;
        };
    };


    const contains = function (value) {
        let temp = this.head;

        while (temp) {
            if (temp.value === value) return true;
            else {
                temp = temp.next;  
            }
        }

        return false;
    };


    const find = function (value) {
        let temp = this.head;
        let index = 0;

        while (temp) {
            index++;
            if (temp.value === value) return index;
            else {
                temp = temp.next;
            }
        }

        return null;
    };


    const tellSize = function () {
        return `The linked list has ${size} nodes.`
    };


    const toString = function () {
        let temp = this.head;
        let list = '';

        if (!this.head) return null;
        else {
            while (temp) {
                list += `( ${temp.value} ) -> `
                temp = temp.next
            }
            list += 'null';
        }

        return list;
    };


    // Extra Credit

    const insertAt = function (value, index) {
        let temp = this.head;
        let position = 1;

        if (size < index) return console.log('ERROR: index not found.')

        while (temp) {
            position++;
            if (position === index) {
                newNode = new Node(value, temp.next)
                temp.next = newNode;
            }
            else {
                temp = temp.next;
            }
        };
    };


    const removeAt = function (index) {
        let temp = this.head;
        let position = 1;

        if (size < index) return console.log('ERROR: index not found.')

        while (temp) {
            position++;
            if (position === index) {
                temp.next = temp.next.next;
            }
            else {
                temp = temp.next;
            }
        }
    };

    return {append, prepend, tellSize, at, pop, contains, find, toString, insertAt, removeAt};
};



// Function call

let list = new linkedList();

list.append(40);
list.append(50);
list.append(53);
list.append(57);

console.log(list.contains(50));
console.log(list.find(54));

list.insertAt(30, 2);
console.log(list.toString());

list.removeAt(2);
console.log(list.toString());
