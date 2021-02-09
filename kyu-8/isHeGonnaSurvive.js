function hero(bullets, dragons) {
  //Get Coding!
  return bullets / dragons >= 2 ? true : false;
}

// improved solution
function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}
