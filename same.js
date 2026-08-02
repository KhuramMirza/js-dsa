// Function that checks if array 1 has its squared values in array 2 with the same frequency

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let value of arr1) {
    frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
  }

  for (let value of arr2) {
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }
  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4])); // true
console.log(same([1, 2, 3], [1, 4, 9])); // true
console.log(same([1, 2, 3], [1, 4, 5])); // false
