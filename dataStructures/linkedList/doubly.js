class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class myDoublyLinkedList {
  constructor(value = 1) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    }
    this.tail = this.head

    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    return this;
  }

  insert(index, value) {
    if(index>=this.length){
      return this.append(value);
    }

    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index-1);
    const holdingpointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingpointer;

    this.length++;
    return this;
  }

  remove(index) {
    const Currentpointer = this.getTheIndex(index);
    if(Currentpointer){
      if(index == 0) {
        console.log("shift method");
        const Pointer = this.getTheIndex(index);
        const holdingpointer = this.getTheIndex(index+1);
        Pointer.next = null;
        this.head = holdingpointer;
        this.length--;
        return this;
      }
      else if(index == this.length-1) {
        console.log("pop method");
        const firstPointer = this.getTheIndex(index-1);
        firstPointer.next = null;
        this.tail = firstPointer;
        this.length--;
        return this;
      }else {
        const firstPointer = this.getTheIndex(index-1);
        const holdingpointer = this.getTheIndex(index+1);
        firstPointer.next = holdingpointer;
        this.length--;
        return this;
      }
    }
    return undefined;
    
  }

  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

}

let myDoublyLinkedList = new myDoublyLinkedList(1);