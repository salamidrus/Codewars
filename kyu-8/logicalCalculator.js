function logicalCalc(array, op) {
  //your code here
  if (op == "AND") return array.reduce((item, current) => item && current);
  if (op == "OR") return array.reduce((item, current) => item || current);
  if (op == "XOR") return array.reduce((item, current) => item != current);
}

// improved solution
var ops = {
  AND: (a, b) => a && b,
  OR: (a, b) => a || b,
  XOR: (a, b) => a !== b,
};

function logicalCalc(array, op) {
  return array.reduce(ops[op]);
}
