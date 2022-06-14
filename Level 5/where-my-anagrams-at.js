function anagrams(word, words) {
    let control = word.split('').sort().join('')
    let result = []
    for (let i = 0; i < words.length; i++) {
        let temp = words[i].split('').sort().join('')
        if (control === temp) result.push(words[i])
    }
    return result
}