function squareSum(numbers) {
    let result = 0
    numbers.forEach((e) => {
        result += e ** 2
    })
    return result
}