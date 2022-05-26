snail = function (array) {
    if (array[0].length === 0) return []
    let i = 0, j = 0
    let i_start = 0, j_start = 0
    let i_end = array.length - 1, j_end = array.length - 1
    let east = true, south = false, west = false, north = false
    let result = []
    while (result.length != array.length ** 2) {
        if (east) {
            i = i_start
            while (i <= i_end) {
                result.push(array[j_start][i])
                i++
            }
            j_start++
            east = false
            south = true
        } else if (south) {
            j = j_start
            while (j <= j_end) {
                result.push(array[j][i_end])
                j++
            }
            i_end--
            south = false
            west = true
        } else if (west) {
            i = i_end
            while (i >= i_start) {
                result.push(array[j_end][i])
                i--
            }
            j_end--
            west = false
            north = true
        } else if (north) {
            j = j_end
            while (j >= j_start) {
                result.push(array[j][i_start])
                j--
            }
            i_start++
            north = false
            east = true
        }
    }
    return result
}