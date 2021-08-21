import {node, insert, search, startsWith} from './trie.mjs'

const log = whatever => console.log(whatever)

const trie = node()

insert(trie, 'dog')
insert(trie, 'cat')
insert(trie, 'doge')


log(search(trie, 'do'))
log(search(trie, 'cat'))
log(search(trie, 'doge'))
log(search(trie, 'dog'))

log(startsWith(trie, 'do'))
log(startsWith(trie, 'ca'))
log(startsWith(trie, 'cat'))
log(startsWith(trie, 'ba'))

log(trie)
