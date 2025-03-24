// 단일 연결리스트로 구현
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
}

// 1. 맨 뒤에 추가를 하고 맨 앞에서 제거
// 2. 맨 앞에 추가를 하고 맨 뒤에서 제거
