function periodIsLate(last, today, cycleLength) {
  return Math.floor(today.getTime() - last.getTime()) / 86400000 > cycleLength;
}

// improved solution
function periodIsLate(last, today, cycleLength) {
  return (today - last) / 86400000 > cycleLength;
}
