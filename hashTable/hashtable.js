class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // hash generator
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }

    if (this.data[address].find((item) => item[0] === key)) {
      return "This key already exists";
    }

    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (!currentBucket) return undefined;

    const bucketFound = currentBucket.find((item) => item[0] === key);
    if (!bucketFound) return undefined;

    return bucketFound[1];
  }
  getKeys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      const item = this.data[i];
      if (item) {
        item.forEach((element) => keys.push(element[0]));
      }
    }
    return keys;
  }

  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];

    if (!currentBucket) return undefined;

    const bucketIndex = currentBucket.findIndex((item) => item[0] === key);
    const item = currentBucket[bucketIndex];
    if (!item) return undefined;

    this.deleteByIndex(this.data[address], bucketIndex);
    if (!this.data[address].length) delete this.data[address];

    return item;
  }
  deleteByIndex(array, index) {
    for (let i = index; i < array.length - 1; i++) {
      array[i] = array[i + 1];
    }
    array.pop();

    return array;
  }
}

const myHashTable = new HashTable(50); // 50 buckets

myHashTable.set("Tomas", 2004);
myHashTable.set("Diego", 1990);
myHashTable.set("Mariana", 1998);
