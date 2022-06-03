function solution(list) {
    let result = ""
    let count = 0
    let len = 0
    let prev
    for (let i = 0; i < list.length; i++) {
        if (i === 0) {
            prev = list[0]
        } else if (list[i] !== list[i - 1] + 1) {
            if (prev === list[i - 1]) {
                result += list[i - 1]
                len++
            } else if (count > 1) {
                result += `${prev}-${list[i - 1]}`
                len += list[i - 1] - prev + 1
            } else {
                result += `${prev},${list[i - 1]}`
                len += 2
            }
            prev = list[i]
            count = 0
            if (result !== "") result += ","
        } else if (i + 1 === list.length) {
            if (count > 0) {
                result += `${prev}-${list[i]}`
                len += list[i] - prev + 1
            } else {
                result += `${prev},${list[i]}`
                len += 2
            }
            count = 0
        } else {
            count++
        }
    }
    if (len < list.length) result += list[list.length - 1]
    return result
}