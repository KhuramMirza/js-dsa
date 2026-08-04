function hash(str, maxSize) {
  let total = 0;
  for (let char of str) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % maxSize;
  }
  return total;
}

console.log(hash("pink", 10)); // 0
console.log(hash("orangered", 10)); // 7
console.log(hash("cyan", 10)); // 3
