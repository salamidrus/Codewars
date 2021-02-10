function findDifference(a, b) {
  //loading...
  return Math.abs(
    a.reduce((sum, x) => sum * x, 1) - b.reduce((sum, x) => sum * x, 1)
  );
}
