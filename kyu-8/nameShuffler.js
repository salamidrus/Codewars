function nameShuffler(str) {
  //Shuffle It
  let name = str.split(" ");
  return `${name[1]} ${name[0]}`;
}

// improved solution
function nameSuffle(str) {
  return str.split(" ").reverse().join(" ");
}
