const closeCompare = (a, b, margin = 0) => {
  if (Math.abs(a - b) <= margin) return 0;
  if (a < b) return -1;
  return 1;
};

// improved solution
function closeCompare(a, b, m = 0) {
  return Math.abs(a - b) <= m ? 0 : Math.sign(a - b);
}
