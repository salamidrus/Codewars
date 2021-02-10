const flip = (d, a) => {
  //TODO
  return d == "R" ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a);
};

// improved solution
const flip = (d, a) => a.sort((x, y) => (d === "R" ? x - y : y - x));
