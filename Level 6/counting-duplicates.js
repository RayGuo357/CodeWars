function duplicateCount(text) {
    let duplicates = new Map()
    let result = 0

    for (let i = 0; i < text.length; i++) {
        let c = text.charAt(i).toLowerCase()
        if (duplicates.has(c)) {
            duplicates.set(c, 1)
        } else {
            duplicates.set(c, 0)
        }
    }
    duplicates.forEach((value) => {
        result += value
    })
    return result;
}