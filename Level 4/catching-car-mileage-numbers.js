function isInteresting(number, awesomePhrases) {
    if ((number + 2).toString().length < 3 && number.toString().length < 3) return 0
    if (checkCriteria(number, awesomePhrases)) {
        return 2
    } else if (checkCriteria(number + 1, awesomePhrases) || checkCriteria(number + 2, awesomePhrases)) {
        return 1
    } else {
        return 0
    }
}

function checkCriteria(number, awesomePhrases) {
    return checkAllZeros(number)
        || checkSameNumber(number)
        || checkPalindrome(number)
        || checkIncOrDec(number)
        || awesomePhrases.includes(number)
}

function checkAllZeros(number) {
    number = number.toString().split('')
    if (number.length < 3) return false
    if (number[0] !== '0') {
        for (let i = 1; i < number.length; i++) {
            if (number[i] !== '0') return false
        }
        return true
    } else {
        return false
    }
}

function checkSameNumber(number) {
    number = number.toString().split('')
    if (number.length < 3) return false
    let num = number[0]
    for (let i = 1; i < number.length; i++) {
        if (number[i] !== num) return false
    }
    return true
}

function checkPalindrome(number) {
    number = number.toString().split('')
    if (number.length < 3) return false
    let start = 0, end = number.length - 1
    while (start < end) {
        if (number[start] !== number[end]) {
            return false
        } else {
            start++
            end--
        }
    }
    return true
}

function checkIncOrDec(number) {
    number = number.toString().split('')
    if (number.length < 3) return false
    // dec
    if (parseInt(number[0]) === parseInt(number[1]) + 1) {
        let prev = parseInt(number[0])
        for (let i = 1; i < number.length; i++) {
            if (parseInt(number[i]) !== prev - 1) {
                return false
            } else {
                prev = parseInt(number[i])
            }
        }
        console.log('dec')
        return true
    } else if (parseInt(number[0]) === parseInt(number[1]) - 1) { // inc
        let prev = parseInt(number[0])
        for (let i = 1; i < number.length; i++) {
            if (parseInt(i) !== 0 && prev !== 9 && parseInt(number[i]) !== prev + 1) {
                return false
            } else {
                prev = parseInt(number[i])
            }
        }
        console.log('inc')
        return true
    } else {
        return false
    }
}