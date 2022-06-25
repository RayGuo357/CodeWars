function alphabetPosition(text) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let result = []
    text.split('').forEach((e) => {
        if (alpha.includes(e.toLowerCase())) result.push(alpha.indexOf(e.toLowerCase()) + 1)
    })
    return result.join(' ');
}