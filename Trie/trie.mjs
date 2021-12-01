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

const suggestions = (root, prefix, []) => {
    const endNode = _traverse(root, prefix)
    if(!endNode) return []
    Object.keys(endNode)
        .filter(x => x !== 'isEnd')
        .map(x => prefix.concat(x))
}

const print = (root) => {
    if(!root) return ''
    let chars = Object.keys(root)
                    .filter(x => x !== 'isEnd')
                    console.log(chars)
    let result = []
    for(let ch of chars){
        result.push(ch + print(root[ch]))
    }
    return result
}

export {node, insert, search, startsWith, print}