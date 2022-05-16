function score(dice) {
    let count = new Map()
    dice.forEach((e) => {
        if (count.has(e)) {
            count.set(e, count.get(e) + 1)
        } else {
            count.set(e, 1)
        }
    })

    let sum = 0
    count.forEach((val, key) => {
        if (val >= 3) {
            if (key == 1) {
                sum = sum + 1000 + (val - 3) * 100
            } else if (key == 5) {
                sum = sum + 500 + (val - 3) * 50
            } else {
                sum = sum + key * (100)
            }
        } else {
            if (key == 1) {
                sum = sum + (val) * 100
            } else if (key == 5) {
                sum = sum + (val) * 50
            }
        }
    })

    return sum
}