class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        // 새로운 노드 생성
        let newNode = new Node(val);

        // 링크드리스트의 0일 때 (최초일 때)
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // 그렇지 않다면 현재 tail 을 찾아서 tail 의 next 를 newNode 로 설정
            // 새로 만든 노드의 prev 프로퍼티를 예전 테일로 설정
            // 새로 만든 노드를 새로운 tail 로 지정
            // 길이를 1 늘려줌
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        // 길이를 늘려줌
        this.length++;
        return this;
    }

    pop() {
        // head 가 없다면 return undefined
        if (!this.head) return undefined;
        // 그렇지 않다면 현재 tail 을 변수에 저장
        let prevTail = this.tail;
        // 길이가 1이라면 head, tail 을 모두 null 로 저장
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // 새로운 테일을 그 전에 있던 노드로 설정
            this.tail = this.tail.prev;
            // 새로운 테일의 next 를 null 로 설정
            this.tail.next = null;
        }
        this.length--;

        return prevTail;
    }
}

const dl = new DoublyLinkedList();

dl.push(1);
// dl.push(2);
const tail = dl.pop();

console.log(tail);