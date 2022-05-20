function alphanumeric(string) {
    return new RegExp('(^[A-Za-z0-9]+$)').test(string)
}