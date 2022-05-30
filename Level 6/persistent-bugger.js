function persistence(num) {
    if (num.toString().length === 1) return 0
    let count = 0
    while (num.toString().length > 1) {
        let newNum = 1
        for (let i = 0; i < num.toString().length; i++) {
            newNum *= parseInt(num.toString().split('')[i])
        }
        num = newNum
        count++
    }
    return count
}