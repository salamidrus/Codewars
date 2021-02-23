function SeriesSum(n) {
  // Happy Coding ^_^
  let sum = 0;
  let x = 1;
  for (let i = 0; i < n; i++) {
    sum += 1 / x;
    x += 3;
  }
  return sum.toFixed(2);
}

// improved solution
function SeriesSum(n) {
  var sum = 0;
  for (var i = 0; i < n; i++) {
    sum += 1 / (3 * i + 1);
  }
  return sum.toFixed(2);
}
