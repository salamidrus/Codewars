function positiveSum(arr) {
  return arr.reduce((sum, x) => {
    if (x < 0) {
      sum += x;
    }
  });
}

// improved solution
function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}
