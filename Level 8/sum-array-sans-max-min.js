function sumArray(array) {
    if (array == null || array.length == 0) return 0
    if (array.length <= 2) return 0
    return array.reduce((curr, prev) => curr + prev) - Math.max(...array) - Math.min(...array)
}