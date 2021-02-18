function nbYear(p0, percent, aug, p) {
  // your code
  let years = 0;

  let sum = p0;
  while (sum < p) {
    sum = sum + sum * (percent / 100) + aug;
    years++;
  }

  return years;
}
