function rowSumOddNumbers(n) {
  // TODO
  let startIndex = n * (n - 1) + 1;
  let total = 0;

  for (let i = 0; i < n; i++) {
    total += startIndex + i * 2;
  }

  return total;
}

// improved solution
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
