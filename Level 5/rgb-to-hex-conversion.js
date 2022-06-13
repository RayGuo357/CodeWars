function rgb(r, g, b) {
    const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    if (r < 0) r = 0
    if (g < 0) g = 0
    if (b < 0) b = 0
    if (r > 255) r = 255
    if (g > 255) g = 255
    if (b > 255) b = 255
    return hex[Math.floor(r / 16)] + hex[r % 16] + hex[Math.floor(g / 16)] + hex[g % 16] + hex[Math.floor(b / 16)] + hex[b % 16]
}