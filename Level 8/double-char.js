function doubleChar(str) {
    // Your code here
    let result = ""
    str.split('').forEach((e) => {
        result += e + e
    })
    return result
}