function maskify(cc) {
    let result = ""
    cc.split('').forEach((e, i) => {
        if (i < cc.length - 4) {
            result += "#"
        } else {
            result += e
        }
    })
    return result
}