var Node = function (data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
  // Only change code below this line

  this.add = function (element) {
    const newNode = new Node(element, this.tail);

    if (this.head) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = this.head;
    }
  };

  this.remove = function (element) {
    if (this.head == null) return null;

    if (this.head.data === element) {
      this.head = this.head.next;
    }

    if (this.tail.data === element) {
      this.tail = this.tail.prev;
    }

    let current = this.head;
    let previous;

    while (current.next) {
      previous = current;
      current = current.next;

      if (current.data === element) {
        previous.next = current.next;
      }
    }
  };

  // Only change code above this line
};
