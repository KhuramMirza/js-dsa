function addUpTo(n) {
  let total = 0;
  for (let i = 0; i < n.length; i++) {
    total += n[i];
  }
  return total;
}

const numbers = [1, 2, 3, 4, 5];
console.log(addUpTo(numbers)); // Output: 15
