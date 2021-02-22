function isTriangle(a, b, c) {
  if ([a, b, c].includes(0)) {
    return false;
  } else if (a + b <= c) return false;
  else if (a + c <= b) return false;
  else if (b + c <= a) return false;
  else {
    return true;
  }
}

// improved solution
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}
