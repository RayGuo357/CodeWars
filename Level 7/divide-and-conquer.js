function divCon(x) {
    let total = 0
    x.forEach((e) => {
        if (typeof e === 'string') {
            total -= parseInt(e)
        } else {
            total += e
        }
    })
    return total
}