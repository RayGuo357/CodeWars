function treeByLevels(rootNode) {
    if (rootNode === null) return []
    let result = []

    let q = [rootNode]
    while (q.length > 0) {
        let curr = q.shift()

        if (curr !== null) {
            result.push(curr.value)
        }
        if (curr.left !== null) q.push(curr.left)
        if (curr.right !== null) q.push(curr.right)
    }
    return result;
}