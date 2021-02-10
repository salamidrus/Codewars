function sumOfDifferences(arr) {
  if (arr.length > 1) {
    return Math.abs(Math.min(...arr) - Math.max(...arr));
  } else {
    return 0;
  }
}
