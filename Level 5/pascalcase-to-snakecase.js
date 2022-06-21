function toUnderscore(string) {
    const upper = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
    let result = ""
    string.toString().split('').forEach((e) => {
        if (upper.includes(e) && result !== "") {
            result += `_${e.toLowerCase()}`
        } else {
            result += e.toLowerCase()
        }
    })
    return result
}