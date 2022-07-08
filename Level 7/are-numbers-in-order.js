function inAscOrder(arr) {
    let sorted = [...arr].sort((a, b) => a - b)
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] !== arr[i]) return false
    }
    return true
}