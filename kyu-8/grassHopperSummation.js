function Summation(num) {
  if (num == 1) return 1;
  return num + Summation(num - 1);
}

// improved solution
function summation(num) {
  return num ? num + summation(num - 1) : 0;
}
