function warnTheSheep(queue) {
  queue.reverse();
  let index = queue.indexOf("wolf");
  return index === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`;
}

// improved solution
function warnTheSheep(queue) {
  const position = queue.reverse().indexOf("wolf");
  return position === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}
