function arrayMadness(a, b) {
  // Ready, get set, GO!!!
  return a.reduce((a, b) => a + b ** 2, 0) > b.reduce((a, b) => a + b ** 3, 0);
}
