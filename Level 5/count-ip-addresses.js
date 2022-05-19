function ipsBetween(start, end) {
    start = start.split('.'), end = end.split('.')
    let result = 0;
    for (let i = 0; i < 4; i++) {
        result = result + (end[i] - start[i]) * (256 ** (3 - i))
    }
    return result
}