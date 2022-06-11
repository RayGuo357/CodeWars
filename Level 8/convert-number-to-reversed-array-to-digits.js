function digitize(n) {
    n = n.toString().split('').reverse().map(e => +e)
    return n
}