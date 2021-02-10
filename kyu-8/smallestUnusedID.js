function nextId(ids) {
  var x = 0;
  while (ids.includes(x)) x++;
  return x;
}

// alternative solution
function nextId(ids) {
  for (let i = 0; i < ids.length; i++) {
    if (ids.indexOf(i) == -1) {
      return i;
    }
  }
  return ids.length;
}
