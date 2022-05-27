function add(a, b) {
    a = a.split('').reverse(), b = b.split('').reverse()
    let result = []
    let length = Math.max(a.length, b.length)
    for (let i = 0; i < length; i++) {
        if (a[i] === undefined && b[i] !== undefined) {
            result.push(b[i])
        } else if (b[i] === undefined && a[i] !== undefined) {
            result.push(a[i])
        } else {
            let sum = parseInt(a[i]) + parseInt(b[i])
            if (sum > 9) {
                if (a.length < b.length) {
                    if (a[i + 1] === undefined) {
                        a[i + 1] = 0
                        if (a.length > length) length = a.length
                    }
                    a[i + 1] = parseInt(sum.toString().split('')[0]) + parseInt(a[i + 1])
                } else {
                    if (b[i + 1] === undefined) {
                        b[i + 1] = 0
                        if (b.length > length) length = b.length
                    }
                    b[i + 1] = parseInt(sum.toString().split('')[0]) + parseInt(b[i + 1])
                }
                sum = parseInt(sum.toString().split('')[1])
            }
            result.push(sum.toString())
        }
    }
    return result.reverse().join('');
}