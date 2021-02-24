function calculateYears(principal, interest, tax, desired) {
  // your code
  let year = 0;
  while (principal < desired && ++year)
    principal += principal * interest - principal * interest * tax;
  return year;
}
