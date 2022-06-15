function findOdd(A) {
    let result = A[0]
    for (let i = 1; i < A.length; i++) {
        result = result ^ A[i]
    }
    return result
}