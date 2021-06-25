import LinkedList from './LinkedList.mjs'

const {node, length, append, last, prepend, print, insert} = LinkedList

let head = node(1, null)
append(head, node(2, null))
append(head, node(3, null))
append(head, node(4, null))
append(head, node(5, null))

console.log( length(head) ) //prints: 5
console.log( last(head) ) //prints: 5

head = prepend(head, node(6, null))
console.log(length(head)) //prints: 6
console.log(print(head)) //prints: 6 1 2 3 4 5 

head = insert(head, 2, node(8, null))
console.log(print(head)) //prints: 6 1 8 2 3 4 5