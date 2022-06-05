function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function topThreeWords(text) {
    text = text.toLowerCase().split(' ')
    let unique = new Map()

    for (let i = 0; i < text.length; i++) {
        text[i] = replaceAll(text[i], '.', '')
        text[i] = replaceAll(text[i], '/', '')
        text[i] = replaceAll(text[i], '\\\\', '')
        text[i] = replaceAll(text[i], '#', '')
        text[i] = replaceAll(text[i], ',', '')
        if (text[i] !== "" && text[i] !== "'") {
            if (unique.has(text[i])) {
                unique.set(text[i], unique.get(text[i]) + 1)
            } else {
                unique.set(text[i], 1)
            }
        }
    }
    let ordered = new Map([...unique.entries()].sort((a, b) => b[1] - a[1]))
    return Array.from(ordered.keys()).slice(0, 3)
}