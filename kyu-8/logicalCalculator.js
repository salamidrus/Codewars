function logicalCalc(array, op) {
  //your code here
  if (op == "AND") return array.reduce((item, current) => item && current);
  if (op == "OR") return array.reduce((item, current) => item || current);
  if (op == "XOR") return array.reduce((item, current) => item != current);
}
