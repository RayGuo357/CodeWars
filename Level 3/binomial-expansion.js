function expand(expr) {
    expr = expr.split('^')
    let n = parseInt(expr[1])
    let a = 1, b, letter
    if (n === 0) return "1"
    let bino = expr[0].slice(1, expr[0].length - 1)
    bino = bino.split('')
    for (let i = 0; i < bino.length; i++) {
        if (bino[i].match(/[a-z]/i) != null) {
            letter = bino[i]
            let x = bino.slice(0, i).join('')
            if (i !== 0) {
                if (bino.slice(0, i).join('') === "-") {
                    a = -1
                } else {
                    a = parseInt(bino.slice(0, i).join(''))
                }
            }

            if (bino[i + 1] !== "+") {
                b = parseInt(bino.slice(i + 1, bino.length).join(''))
            } else {
                b = parseInt(bino.slice(i + 2, bino.length).join(''))
            }
        }
    }

    let expanded = ""
    for (let i = 0; i < n; i++) {
        let numer = 1
        for (let j = 0; j < i; j++) {
            numer *= (n - j)
        }
        let coefficient = numer / factorial(i) * a ** (n - i) * b ** i
        if (coefficient === 1) {
            if (expanded !== "") expanded += "+"
            expanded += `${letter}`
            if (n - i !== 1) expanded += `^${n - i}`
        } else if (coefficient === -1) {
            expanded += `-${letter}`
            if (n - i !== 1) expanded += `^${n - i}`
        } else if (coefficient !== 0) {
            if (expanded !== "" && coefficient > 0) expanded += "+"
            expanded += `${coefficient}${letter}`
            if (n - i !== 1) expanded += `^${n - i}`
        }
    }
    if (b ** n !== 0) {
        if (expanded !== "" && b ** n > 0) expanded += "+"
        expanded += `${b ** n}`
    }
    return expanded
}

var f = [];
function factorial(n) {
    if (n == 0 || n == 1)
        return 1;
    if (f[n] > 0)
        return f[n];
    return f[n] = factorial(n - 1) * n;
}