// We first need to create two factory functions: one for the full list
// and other for each node.

function linkedList() {
    this.head = null;
    this.size = 0;
};

function Node(value, next = null) {
    this.value = value;
    this.next = next;
};