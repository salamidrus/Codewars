function squareDigits(num) {
  //may the code be with you
  let split = num.toString().split("");
  return Number(split.map((el) => Number(el) ** 2).join(""));
}

// improved solution
function squareDigits(num) {
  return Number(
    ("" + num)
      .split("")
      .map(function (val) {
        return val * val;
      })
      .join("")
  );
}
