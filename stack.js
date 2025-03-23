// 단일 연결리스트로 구현
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // 맨 앞에서 추가와 제거 (상수값의 시간을 위해)
    // 스택은 후입선출인데 왜 맨 앞에서 추가와 제거를 하는 거지?
    push(val) {
        let newNode = new Node(val);

        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            // 맨 앞에 있는 값에 추가
            let currentFirst = this.first;
            this.first = newNode;
            newNode.next = currentFirst;
        }
        return ++this.size;
    }

    pop() {
        if (!this.size) return null;
        let currentFirst = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        }
        this.first = currentFirst.next;
        this.size--;
        return;
    }
}
