//* This module contains Linked List helper functions

//returns a new node initialized with the arguments passed
const node = (value, next = null) => ({value,next})

//returns the length of the list
const length = (head, acc = 0) => !head ? acc : ( head.next ? length(head.next, acc + 1) : acc + 1 )

//adds a node to the end of the list
const append = (head, node) => !head ? node : (last(head).next = node)

//returns reference to last node in the list
const last = head => !head ? null : head.next ? last(head.next) : head

//adds a node to the start of the list and returns the new head
const prepend = (head, node) => {
    if(!head) return node
    node.next = head
    return node
}

//returns a string representation of all the elements of the list
const print = head => !head ? '' : `${head.value} ${print(head.next)}`

export default {node, length, append, last, prepend, print}