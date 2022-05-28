function determinant(m) {
    if (m.length === 1) return m[0][0]
    if (m.length === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0]
    let det = 0
    for (let i = 0; i < m.length; i++) {
        det += (-1) ** i * m[0][i] * determinant(minorArray(m, i))
    }
    return det
};

function minorArray(arr, i) {
    let result = []
    let counter = 0
    for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr.length; k++) {
            if (j != 0 && k != i) {
                if (result[counter] === undefined) result[counter] = []
                result[counter][result[counter].length] = arr[j][k]
                if (result[counter].length >= arr.length - 1) counter++
            }
        }
    }
    return result
}