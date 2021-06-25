//* This module contains Linked List helper functions

//returns a new node initialized with the arguments passed
const node = (value, next = null) => ({value, next})

//returns the length of the list
const length = (head, acc = 0) => head.next ? length(head.next, acc + 1) : acc + 1

//adds a node to the end of the list and returns head for chaining
const append = (head, node) => {
    if(!head) return node
    _lastNode(head).next = node
    return head
}

//adds a node to the start of the list and returns the new head
const prepend = (head, node) => {
    if(!head) return node
    node.next = head
    return node
}

//deletes first node from the list and returns new head
const deleteFirst = head => head.next ? head.next : null

//deletes last node from the list and returns head for chaining
const deleteLast = head => head.next ? deleteLast(head.next) : null

//returns the last value in the list
const last = head => _lastNode(head).value

//returns reference to node in the list
const _lastNode = head => head.next ? _lastNode(head.next) : head

//inserts a node on the given index and returns head for chaining
const insert = (head, index, node) => {
    if(index === 0) return prepend(head, node)
    if(index >= length(head)) return append(head, node)
    head.next = insert(head.next, index - 1, node)
    return head
}

//returns a string representation of all the elements of the list
const print = head => head.next ? `${head.value} ${print(head.next)}` : head.value

export default 
{
    node, 
    length, 
    append, 
    last, 
    prepend, 
    print, 
    insert, 
    deleteFirst,
    deleteLast,
    // delete
}