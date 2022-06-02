function formatDuration(seconds) {
    let result = ""
    const label = ["year", "day", "hour", "minute", "second"]
    let duration = [0, 0, 0, 0, 0]
    let count = 0
    if (seconds === 0) return "now"

    duration[0] = Math.floor(seconds / 31536000)
    seconds = seconds % 31536000

    duration[1] = Math.floor(seconds / 86400)
    seconds = seconds % 86400

    duration[2] = Math.floor(seconds / 3600)
    seconds = seconds % 3600

    duration[3] = Math.floor(seconds / 60)
    duration[4] = seconds % 60

    duration.forEach((e) => {
        if (e) count++
    })

    for (let i = 0; i < duration.length; i++) {
        if (duration[i]) {
            count--
            result += `${duration[i]} ${label[i]}`

            if (duration[i] > 1) {
                result += "s"
            }

            if (count > 1) {
                result += ", "
            } else if (count > 0) {
                result += " and "
            }
        }
    }
    return result
}