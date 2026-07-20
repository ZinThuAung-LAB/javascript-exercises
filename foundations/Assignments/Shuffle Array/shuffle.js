function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];
shuffle(arr);
console.log(arr);
// arr = [3, 2, 1]
