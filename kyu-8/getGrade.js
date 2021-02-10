function getGrade(s1, s2, s3) {
  // Code here
  let avg = (s1 + s2 + s3) / 3;
  return avg >= 90
    ? "A"
    : avg >= 80 && avg < 90
    ? "B"
    : avg >= 70 && avg < 80
    ? "C"
    : avg >= 60 && avg < 70
    ? "D"
    : "F";
}
