function abbrevName(name) {
    name = name.split(" ")
    return `${name[0].charAt(0).toUpperCase()}.${name[1].charAt(0).toUpperCase()}`
}