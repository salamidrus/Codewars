function DNAStrand(dna) {
  //your code here
  let dict = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  let str = "";
  for (let char of dna) {
    str += dict[char];
  }

  return str;
}

// improved solution
function DNAStrand(dna) {
  return dna.replace(/./g, function (c) {
    return DNAStrand.pairs[c];
  });
}

DNAStrand.pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};
