function accum(s) {
    let result = []
    s.split('').forEach((e, i) => {
        if (i !== 0) result.push('-')
        result.push(e.toUpperCase())
        for (let j = 0; j < i; j++) {
            result.push(e.toLowerCase())
        }
    })
    return result.join('')
}