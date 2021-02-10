function index(array, n) {
  //your code here
  return array[n] ** n || -1;
}

// improved solution
const index = (array, n) => (array.length > n ? Math.pow(array[n], n) : -1);
