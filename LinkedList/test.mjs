import LinkedList from './LinkedList.mjs'

const {node, length, append, last, prepend, print} = LinkedList

let head = node(1, null)
append(head, node(2, null))
append(head, node(3, null))
append(head, node(4, null))
append(head, node(5, null))

console.log( length(head) ) //prints: 5
console.log( last(head) ) //prints: {value: 5, next: null}

head = prepend(head, node(6, null))
console.log(length(head))

console.log(print(head)) //prints: 1 2 3 4 5 6
