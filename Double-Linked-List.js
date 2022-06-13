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

    // 리스트가 비어있는지 확인한다.
    if (this.head) {
      // 비어있지 않다면 테일의 next에 할당한다.
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      // 비어있다면 헤더와 테일에 모두 값을 할당한다.
      this.head = newNode;
      this.tail = this.head;
    }
  };

  this.remove = function (element) {
    // 리스트가 비어있는지 확인한다.
    if (this.head == null) return null;

    // 헤더에 값이있으면 삭제한다.
    if (this.head.data === element) {
      this.head = this.head.next;
    }

    // 꼬리에 값이 있으면 삭제한다.
    if (this.tail.data === element) {
      this.tail = this.tail.prev;
    }

    let current = this.head;
    let previous;

    // 리스트를 돌며 값이 있는 노드들을 삭제한다.
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
