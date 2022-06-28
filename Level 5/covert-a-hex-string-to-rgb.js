function hexStringToRGB(hexString) {
    const hex = '0123456789ABCDEF'.split('')
    hexString = hexString.split('')
    let r = 0, g = 0, b = 0;
    r = hex.indexOf(hexString[1].toUpperCase()) * 16 + hex.indexOf(hexString[2].toUpperCase())
    g = hex.indexOf(hexString[3].toUpperCase()) * 16 + hex.indexOf(hexString[4].toUpperCase())
    b = hex.indexOf(hexString[5].toUpperCase()) * 16 + hex.indexOf(hexString[6].toUpperCase())
    return { r: r, g: g, b: b }
}