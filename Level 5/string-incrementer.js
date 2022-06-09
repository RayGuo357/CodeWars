function incrementString(strng) {
    strng = strng.split('')
    let num = "", result = ""
    let count = 0
    strng.forEach((e) => {
        if (e.match(/[0-9]/)) {
            num += e
            count++
        } else {
            result += e
        }
    })
    if (num === "") {
        num = 1
    } else {
        num = parseInt(num) + 1
    }
    num = num.toString().padStart(count, '0')
    return result += num
}