function validParentheses(parens) {
    parens = parens.split('')
    let count = 0
    let neverNeg = true
    parens.forEach((e) => {
        if (e === '(') {
            count++
        } else if (e === ')') {
            count--
        }
        if (count < 0) neverNeg = false
    })
    return count === 0 && neverNeg;
}