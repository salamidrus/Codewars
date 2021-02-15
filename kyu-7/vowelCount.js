function getCount(str) {
  var vowelsCount = 0;

  // enter your majic here
  for (let char of str) {
    if ("aeiou".indexOf(char) >= 0) vowelsCount++;
  }

  return vowelsCount;
}

// improved solution
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
