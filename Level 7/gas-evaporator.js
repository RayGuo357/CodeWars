function evaporator(content, evap_per_day, threshold) {
    threshold = content * (threshold / 100)
    let count = 0
    while (content >= threshold) {
        content *= (1 - (evap_per_day / 100))
        count++
    }
    return count;
}