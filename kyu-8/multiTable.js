function multiTable(number) {
  // good luck
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .map((item) => `${item} * ${number} = ${item * number}`)
    .join("\n");
}

// improved solution
function multiTable(n) {
  return [...Array(10)]
    .map((_, i) => `${i + 1} * ${n} = ${n * i + n}`)
    .join("\n");
}
