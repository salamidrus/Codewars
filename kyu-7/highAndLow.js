function highAndLow(numbers) {
  // ...
  let split = numbers.split(" ");

  let minNum = Number(split[0]);
  let maxNum = Number(split[0]);

  for (let num of split) {
    num = Number(num);
    if (num < minNum) minNum = num;
    if (num > maxNum) maxNum = num;
  }

  return `${maxNum} ${minNum}`;
}

// improved solution
function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
