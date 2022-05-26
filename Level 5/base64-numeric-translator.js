function base64toBase10(base64) {
  const c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("")
  let result = 0, counter = 0
  base64.split("").reverse().forEach((e) => {
    result += c.indexOf(e) * 64 ** counter
    counter++
  })
  return result
}
