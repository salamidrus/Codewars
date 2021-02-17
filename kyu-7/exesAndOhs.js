function XO(str) {
  //code here
  let strLow = str.toLowerCase();
  let lookup = {
    x: 0,
    o: 0,
  };

  for (let char of strLow) {
    lookup[char] = ++lookup[char] || 1;
  }

  if (lookup.x != lookup.o) return false;

  return true;
}

// improved solution
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
