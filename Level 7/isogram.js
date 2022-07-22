function isIsogram(str) {
    let map = new Map()
    str = str.split('')
    for (let e of str) {
        if (map.has(e.toLowerCase())) return false
        map.set(e.toLowerCase(), 1)
    }
    return true
}