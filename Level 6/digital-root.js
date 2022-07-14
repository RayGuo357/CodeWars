function digital_root(n) {
    if (n <= 9) return n
    let sum = 0
    n.toString().split('').forEach((e) => {
        sum += parseInt(e)
    })
    return digital_root(sum)
}