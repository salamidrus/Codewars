function squareSum(numbers) {
  return numbers.reduce((sum, x) => (sum += x ** 2));
}
