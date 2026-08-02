function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }
  console.log(frequencyCounter1, frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }
  return true;
}

console.log(validAnagrams("listen", "silent")); // true
console.log(validAnagrams("hello", "world")); // false
console.log(validAnagrams("triangle", "integral")); // true
