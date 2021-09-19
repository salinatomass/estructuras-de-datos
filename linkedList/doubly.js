class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;

    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    newNode.next.prev = newNode;
    this.head = newNode;
    this.length++;

    return this;
  }

  // remove(index) {
  //   const prevPointer = this.getTheIndex(index - 1);
  //   const holdingPointer = prevPointer.next;

  //   prevPointer.next = holdingPointer.next;

  //   if (holdingPointer.next) holdingPointer.next.prev = prevPointer;
  //   if (index === this.length - 1) this.tail = prevPointer;

  //   this.length--;

  //   return this;
  // }

  // insert(index, value) {
  //   if (index >= this.length) return this.append(value);

  //   const newNode = new Node(value);
  //   const firstPointer = this.getTheIndex(index - 1);
  //   const holdingPointer = firstPointer.next;
  //   firstPointer.next = newNode;
  //   newNode.next = holdingPointer;

  //   this.length++;

  //   return this;
  // }
  // getTheIndex(index) {
  //   let counter = 0;
  //   let currentNode = this.head;

  //   while (counter < index) {
  //     if (currentNode.next) {
  //       currentNode = currentNode.next;
  //     }

  //     counter++;
  //   }

  //   return currentNode;
  // }
}

let myLinkedList = new MyDoublyLinkedList(1);

myLinkedList.append(2);
myLinkedList.append(3);
