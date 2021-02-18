// return masked string
function maskify(cc) {
  if (cc.length < 4) return cc;

  let ccSlice = cc.slice(cc.length - 4);

  let ccR = cc.replace(/./g, "#");

  return ccR.substring(0, cc.length - 4) + ccSlice;
}

// improved solution
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}
