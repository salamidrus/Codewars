function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  return arrayOfSheep.filter((el) => el).length;
}

// improved solution
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
