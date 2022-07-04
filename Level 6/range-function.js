function range(start, end, step) {
    if (end == undefined) {
        end = start
        start = 0
        step = 1
    } else if (step == undefined) {
        step = 1
    }

    if (start >= end) return []

    let result = []

    let counter = start

    for (let i = start; i < end; i += step) {
        if (counter >= end) break
        result.push(i)
        counter++
    }

    return result
}