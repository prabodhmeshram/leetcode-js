class DynamicArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    if (this.length - 1 < index) return undefined;
    return this.data[index];
  }

  push(item) {
    this.data[this.length++] = item;
    return this.length;
  }

  pop() {
    if (this.length === 0) return undefined;

    const popped = this.data[this.length - 1];

    delete this.data[--this.length];

    return popped;
  }

  insert(index, item) {
    if (this.length - 1 <= index) {
      throw Error("Array size is less than the index provided");
    }

    for (let i = index; i <= this.length - 1; i++) {
      // swap places till last index
      const swapItem = this.data[i];
      this.data[i] = item;
      item = swapItem;
    }
    return this.length++;
  }

  remove(index) {
    if (this.length - 1 < index) {
      throw Error("Array size is less than the index provided");
    }

    for (let i = index; i < this.length - 1; i++) {
      console.log(
        "Before swap value at i = " + i + " = " + this.data[i],
        this.data[5]
      );
      this.data[i] = this.data[i + 1];
      console.log("Before after swap value at i = " + i + " = " + this.data[i]);
    }

    delete this.data[--this.length];
    return this.length;
  }
}

const myArr = new DynamicArray();

console.log(myArr.get(0));

myArr.push(10);
myArr.push(20);
myArr.push(30);
myArr.push(50);
myArr.push(60);
myArr.push(70);

// console.log(myArr.get(0))
// console.log(myArr.get(1))

myArr.pop();

console.log(myArr.get(0));
console.log(myArr.get(1));
console.log(myArr.length);
console.log("Element at 3 index " + myArr.get(3));
console.log("Element at 4 index " + myArr.get(4));

myArr.insert(3, 40);

console.log("Element at 3 index " + myArr.get(3));
console.log("Element at 4 index " + myArr.get(4));
console.log("Element at 5 index " + myArr.get(5));
console.log(myArr.length);

myArr.remove(4);

console.log("Element at 3 index " + myArr.get(3));
console.log("Element at 4 index " + myArr.get(4));
console.log("Element at 5 index " + myArr.get(5));
console.log(myArr.length);
