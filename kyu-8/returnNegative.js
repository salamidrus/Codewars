function returnNegative(num) {
  return num < 0 ? num : -num;
}

// improved solution
function makeNegative(num) {
  return -Math.abs(num);
}
