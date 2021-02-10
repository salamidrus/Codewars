function toCsvText(array) {
  // good luck
  let result = [];
  for (let data of array) {
    result.push(data.join(","));
  }

  return result.join("\n");
}

// improved solution
function toCsvText(array) {
  return array.join("\n");
}
