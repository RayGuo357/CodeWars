function toCamelCase(str) {
    if (str === '') return ''
    if (str.includes('-')) str = str.split('-')
    if (str.includes('_')) str = str.split('_')

    let result = ""

    if (str[0].charAt(0).toUpperCase() == str[0].charAt(0)) {
        result += str[0].charAt(0) + str[0].slice(1)
    } else {
        result += str[0].toLowerCase()
    }

    for (let i = 1; i < str.length; i++) {
        result += str[i].charAt(0).toUpperCase() + str[i].slice(1)
    }

    return result
}