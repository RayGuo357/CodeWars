function moveZeros(arr) {
    let result = []
    let zeros = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros.push(arr[i])
        } else {
            result.push(arr[i])
        }
    }
    return result.concat(zeros)
}