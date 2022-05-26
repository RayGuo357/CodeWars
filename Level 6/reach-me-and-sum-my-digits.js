function sumDigNthTerm(initval, patternl, nthterm) {
  for (let i = 0; i < nthterm - 1; i++) {
    initval += patternl[i % patternl.length]
  }
  let sum = 0
  initval.toString().split('').forEach((e) => {
    sum += parseInt(e)
  })
  return sum
}
