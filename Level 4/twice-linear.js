function dblLinear(n) {
    let u = [1]
    let y = 0, z = 0
    for (let i = 0; i < n; i++) {
        let y2 = 2 * u[y] + 1, z2 = 3 * u[z] + 1
        if (y2 == z2) {
            u[u.length] = y2
            y++
            z++
        } else if (y2 < z2) {
            u[u.length] = y2
            y++
        } else {
            u[u.length] = z2
            z++
        }
    }
    return u[n]
}