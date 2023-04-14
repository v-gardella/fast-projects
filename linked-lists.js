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

function linkedList() {
    this.head = null;
    this.size = 0;

    // Functions:

    const append = function (value) {    
        let temp = 0;
        let node = new Node(value);

        if (this.head === null) {
            this.head = node;
        } else {
            temp = this.head;
            while (temp.next) {
                temp = temp.next;
            };
        }

        temp.next = node;
        this.size += 1;

        return node, size;
    };
};