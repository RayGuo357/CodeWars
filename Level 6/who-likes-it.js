function likes(names) {
    let count = names.length
    if (count === 0) return "no one likes this"
    if (count > 3) {
        return `${names[0]}, ${names[1]} and ${count - 2} others like this`
    } else {
        let list = ""
        let like = 'like'
        if (count === 1) like = 'likes'
        for (let i = 0; i < names.length; i++) {
            list += names[i]
            count--
            if (count > 1) {
                list += ','
            } else if (count !== 0) {
                list += ' and'
            }
            list += ' '
        }
        return `${list}${like} this`
    }
}