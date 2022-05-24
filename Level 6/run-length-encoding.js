var runLengthEncoding = function(str){
  let result = new Map()
  let rle = [] 
  str.split("").forEach((e) => {
    if (!result.has(e)) {
      result.forEach((val, key) => {
        rle.push([val, key])
      })
      result = new Map()
      result.set(e, 1)
    } else {
      result.set(e, result.get(e) + 1)
    }
  })
  
  result.forEach((val, key) => {
   rle.push([val, key])
  })
  return rle
}
