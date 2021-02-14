function sc(floor) {
  if (floor <= 1) {
    return "";
  } else if (floor < 7) {
    return "Aa~ ".repeat(floor - 1) + "Pa! " + "Aa!";
  } else {
    return "Aa~ ".repeat(floor - 1) + "Pa!";
  }
}

// improved solution
function sc(floor) {
  if (floor <= 1) return "";

  return "Aa~ ".repeat(floor - 1) + "Pa!" + (floor <= 6 ? " Aa!" : "");
}
