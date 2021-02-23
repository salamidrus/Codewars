function solution(str, ending) {
  // TODO: complete
  return str.slice(-ending.length).indexOf(ending) >= 0;
}

// improved solution
function solution(str, ending) {
  return str.endsWith(ending);
}
