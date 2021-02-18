function sumTwoSmallestNumbers(numbers) {
  //Code here
  let lowest = Math.min.apply(null, numbers);

  let numberFiltered = numbers.filter((el, i) => i != numbers.indexOf(lowest));

  let lowestSecond = Math.min.apply(null, numberFiltered);

  return lowest + lowestSecond;
}

// improved solution
function sumTwoSmallestNumbers(numbers) {
  var [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}
