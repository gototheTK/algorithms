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
  // 주어진 인덱스를 찾아 새로운 값의 노드를 넣는다.
  this.addAt = function (index, element) {
    // 이전 노드와 현재 노드를 가르키기 위한 변수 선언
    let current = head;
    let previous;
    let newNode = new Node(element);

    // 값을 넣고자하는 노드의 인덱스가 0일 경우
    if (index === 0) {
      newNode.index = 0;
      newNode.next = head;
      head = newNode;
      length++;
      return;
    }

    // 값을 넣고자하는 인덱스가 1일 경우
    while (index >= length && index > -1 && current.next) {
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
