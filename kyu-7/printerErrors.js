function printerError(s) {
  // your code
  return `${
    s.split("").filter((el) => "abcdefghijklm".indexOf(el) == -1).length
  }/${s.length}`;
}

// improved solution
function printerError(s) {
  return s.match(/[^a-m]/g).length + "/" + s.length;
}
