function spinWords(string) {
    let a = string.split(' ')
    a.forEach((e, index) => {
        if (e.length > 4) {
            a[index] = e.split('').reverse().join('')
        }
    })
    return a.join(' ')
}