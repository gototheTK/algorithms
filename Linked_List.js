function LinkedList() {
  let length = 0;
  let head = null;

  function Node(element) {
    this.element = element;
    this.next = null;
  }

  this.head = () => head;

  this.size = () => length;

  this.add = (element) => {
    // My Code
    this.head() == null
      ? (() => {
          head = new Node(element);
          console.log(head.element);
          length = this.size() + 1;
        })()
      : head.next === null
      ? (() => {
          head.next = new Node(element);
          length = this.size() + 1;
        })()
      : (() => {
          head.next.next = new Node(element);
          console.log(head.next.next.element);
          length = this.size() + 1;
        })();
    // My Code

    // Answer Code
    const node = new Node(element);
    if (head) {
      let current = head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    } else {
      head = node;
    }
    length++;
    // Answer Code
  };
}
