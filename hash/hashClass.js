class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    for (let item of this.keyMap[index]) {
      if (item[0] === key) {
        item[1] = value; // Update the value and exit
        return;
      }
    }

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let item of this.keyMap[index]) {
        if (item[0] === key) {
          console.log(item[1]);
          return item[1];
        }
      }
    }
    return undefined;
  }

  values() {
    let valuesArr = [];
    for (let item of this.keyMap) {
      if (item) {
        for (let [key, value] of item) {
          if (!valuesArr.includes(value)) valuesArr.push(value);
        }
      }
    }
    return valuesArr;
  }

  keys() {
    let keysArr = [];
    for (let item of this.keyMap) {
      if (item) {
        for (let [key, value] of item) {
          if (!keysArr.includes(key)) keysArr.push(key);
        }
      }
    }
    return keysArr;
  }
}

let ht = new HashTable();

ht.set("hello world", "goodbye!!");
ht.set("hello world", "goodbye!!");
ht.set("dogs", "are cool");
ht.set("cats", "are cute");
ht.set("birds", "are beautiful");
ht.set("fish", "are slippery");

console.log(ht.get("hello world"));
console.log(ht.values());
console.log(ht.keys());
