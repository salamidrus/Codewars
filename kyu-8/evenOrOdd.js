function even_or_odd(number) {
  // ...
  return number % 2 == 0 ? "Even" : "Odd";
}

// improved solution
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even";
}
