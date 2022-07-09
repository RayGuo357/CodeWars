function queueTime(customers, n) {
    if (customers.length === 0) return 0
    let q = []
    for (let i = 0; i < customers.length; i++) {
        if (q.length < n) {
            q.push(customers[i])
        } else {
            q[q.indexOf(Math.min(...q))] += customers[i]
        }
    }
    return Math.max(...q)
}