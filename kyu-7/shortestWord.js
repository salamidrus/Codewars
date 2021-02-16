function findShort(s) {
  let sp = s.split(" ");
  return sp.reduce((a, b) => (a = b.length < a ? b.length : a), sp[0].length);
}

// improved solution
function findShort(s) {
  return Math.min.apply(
    null,
    s.split(" ").map((w) => w.length)
  );
}
