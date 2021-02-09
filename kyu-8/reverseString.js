function solution(str) {
  return str.split("").reverse().join("");
}

// improved solution
const solution = (s) => [...s].reverse().join("");
