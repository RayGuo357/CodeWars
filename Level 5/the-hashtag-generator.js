function generateHashtag(str) {
    if (str.trim() === "") return false
    let hashtag = "#"
    str.split(" ").forEach((e) => {
        hashtag += e.charAt(0).toUpperCase()
        hashtag += e.slice(1, e.length)
    })
    if (hashtag.length > 140) return false
    return hashtag
}