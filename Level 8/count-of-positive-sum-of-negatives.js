function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) return []
    let pos = 0, neg = 0
    input.forEach((e) => {
        e > 0 ? pos++ : neg += e
    })
    return [pos, neg]
}