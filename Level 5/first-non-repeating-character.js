function firstNonRepeatingLetter(s) {
    let arr = []
    let excluded = []
    s = s.split('')
    s.forEach((e) => {
        if (arr.includes(e.toLowerCase()) || arr.includes(e.toUpperCase())) {
            if (arr.includes(e.toLowerCase())) removeItem(arr, e.toLowerCase())
            if (arr.includes(e.toUpperCase())) removeItem(arr, e.toUpperCase())
            excluded.push(e)
        } else if (!(excluded.includes(e.toLowerCase()) || excluded.includes(e.toUpperCase()))) {
            arr.push(e)
        }
    })
    if (arr.length === 0) return ""
    return arr[0]
}

const removeItem = (arr, el) => {
    let ind = arr.indexOf(el)
    if (ind !== -1) {
        arr.splice(ind, 1);
    }
}