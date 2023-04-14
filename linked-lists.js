// We first need to create two factory functions: one for the full list
// and other for each node.

function linkedList() {

};

function Node(value, next = null) {
    this.value = value;
    this.next = next;
};