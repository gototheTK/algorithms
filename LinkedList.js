function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  // Only change code below this line

  this.addAt = function (index, element) {
    let current = head;
    let previous;
    let newNode = new Node(element);

    if (index === 0) {
      newNode.index = 0;
      newNode.next = head;
      head = newNode;
      length++;
      return;
    }

    while (index >= length && index > -1 && current.next) {
      // 변수선언
      previous = current;
      current = current.next;

      if (current.head === index) {
        current.index++;

        newNode.index = index;
        newNode.next = current;

        previous.next = newNode;

        length++;

        return;
      }
    }

    return false;
  };

  // Only change code above this line
}
