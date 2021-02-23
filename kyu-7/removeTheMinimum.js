function removeSmallest(numbers) {
  let sortedArr = [...numbers].sort((a, b) => a - b);
  let smallestNumber = sortedArr[0];
  let result = [...numbers];
  let smallestNumberIndex = result.indexOf(smallestNumber);
  result.splice(smallestNumberIndex, 1);

  return result.length < 1 ? [] : result;
}

function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}
