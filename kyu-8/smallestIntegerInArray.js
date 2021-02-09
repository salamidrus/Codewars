function findSmallestInt(args) {
  let min = args[0];
  args.forEach((el) => el < min && (min = el));
  return min;
}

// improved solution
function findSmallestInt(args) {
  return Math.min(...args);
}
