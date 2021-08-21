//factory function for trie node
const node = (isEnd = false) => ({isEnd})

const insert = (root, word) => {
    if(!word) return
    let ch = word.charAt(0)
    if(word.length === 1){
        root[ch] = node(true)
    }
    else{
        if(!root[ch]) root[ch] = node()
        insert(root[ch], word.substr(1))
    }
}

const _traverse = (root, str) => {
    if(str.length === 1 && root[str]) return root[str]
    let ch = str.charAt(0)
    if(!root[ch]) return null
    return _traverse(root[ch], str.substr(1))
}

const search = (root, word) => {
    const endNode = _traverse(root, word)
    return endNode ? endNode.isEnd : false
}

const startsWith = (root, word) => {
    const endNode = _traverse(root, word)
    return endNode ? true : false 
}

export {node, insert, search, startsWith}