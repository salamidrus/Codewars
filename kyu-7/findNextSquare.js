function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  return Math.sqrt(sq) % 1 ? -1 : (Math.sqrt(sq) + 1) ** 2;
}
