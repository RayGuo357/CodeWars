function positiveSum(arr) {
    let result = 0
    arr.forEach((e) => {
        if (e > 0) result += e
    })
    return result
}