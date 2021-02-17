function isIsogram(str){
  //...
  let strLow = str.toLowerCase()
  let lookup = {}
  for (let char of strLow) {
    lookup[char] = ++lookup[char] || 1
    if (lookup[char] > 1) return false
  }
  
  return true
}