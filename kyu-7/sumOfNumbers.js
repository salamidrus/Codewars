function getSum(a, b) {
  //Good luck!
  if (a == b) return a;

  let sum = 0;
  let min = a < b ? a : b;
  let max = a > b ? a : b;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

// improved solution
const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};
