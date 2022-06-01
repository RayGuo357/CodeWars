function matrixAddition(a, b) {
    let result = []
    for (let i = 0; i < a.length; i++) {
        let inner = []
        for (let j = 0; j < b.length; j++) {
            inner.push(a[i][j] + b[i][j])
        }
        result.push(inner)
    }
    return result
}