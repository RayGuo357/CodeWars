function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let result = ""
    str.split('')
    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i].toLowerCase())) {
            result += str[i]
        }
    }
    return result;
}