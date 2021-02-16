function accum(s) {
  // your code
  return s
    .split("")
    .map((el, id) => el.toUpperCase() + el.toLowerCase().repeat(id))
    .join("-");
}
