function findShort(s) {
    let result = Number.MAX_SAFE_INTEGER
    s.split(' ').forEach((e) => {
        if (e.length < result) result = e.length
    })
    return result
}