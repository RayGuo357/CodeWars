function squareDigits(num) {
    num = num.toString().split('')
    for (let i = 0; i < num.length; i++) {
        num[i] = parseInt(num[i]) ** 2
    }
    return parseInt(num.join(''));
}