function countSheeps(arrayOfSheep) {
    let result = 0
    arrayOfSheep.forEach((e) => {
        if (e) result++
    })
    return result
}