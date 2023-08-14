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

    delete this.data[this.length - 1];
    this.length -= 1;

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

    this.data[this.length++] = item;
    return this.length;
  }

  remove(index) {
    if (this.length - 1 < index) {
      throw Error("Array size is less than the index provided");
    }

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
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

console.log(myArr.pop());

console.log(myArr);

myArr.insert(3, 40);

console.log(myArr);

myArr.remove(2);

console.log(myArr);
