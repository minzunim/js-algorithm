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

    // 맨 앞의 노드 제거
    shift() {
        // 현재 노드가 하나도 없을 때
        if (!this.length) return undefined;
        var oldHead = this.head;

        // 노드가 한 개일 때
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        // 그보다 많을 때
        this.length--;
        return oldHead;
    }

    unshift(val) {
        // 새로운 노드 생성
        var newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode; // 현재 헤드의 이전값을 새로운 노드로 변경
            newNode.next = this.head; // 새로운 노드의 다음 값을 이전 노드로 변경
            this.head = newNode; // 현재 헤드를 새로운 노드로 변경
        }

        this.length++;
        return this;
    }

    get(index) {
        // 인덱스가 유효한지 확인
        if (index < 0 || index >= this.length) return null;
        let count, current = 0;
        if (index < this.length / 2) {
            // 헤드부터 시작
            count = 0;
            current = this.head;

            while (count != index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;

            while (count != index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    // 특정 인덱스의 값을 get 메소드로 찾은 다음 특정 값으로 변경
    set(index, val) {
        let node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }

    // 특정 인덱스에 값을 추가
    insert(index, val) {
        // 리스트 길이에 벗어나면 undefined
        if (index < 0 || index > this.length) return undefined;
        // index === 0 이면 unshift (헤드 추가)
        if (index === 0) {
            return !!this.unshift(val);

            // index === this.length 이면 push (tail 추가)
        } else if (index === this.length) {
            return !!this.push(val);

            // 그 외의 값이면 index -1 위치에 추가
        } else {
            let newNode = new Node(val);
            let current = this.get(index);
            let prevCurrent = this.get(index - 1);

            // 1 - [prevCurrent] - [current] - ...
            // prevCurrent 뒤에 먼저 연결 후 current 와 연결
            prevCurrent.next = newNode; // 삽입하려는 위치 이전 노드의 다음 값을 현재 노드로 변경
            newNode.prev = prevCurrent; // 현재 노드의 이전 값을 이전 노드로 변경
            newNode.next = current;
            current.prev = newNode;
            this.length++;
        }
        return this;
    }

    remove(index) {
        // index 유효성 확인
        if (index < 0 || index >= this.length) return false;

        // index === 0일 때 shift
        if (index === 0) return this.shift();

        // index === length - 1 pop
        if (index === this.length - 1) return this.pop();

        // 나머지 케이스
        let currentNode = this.get(index);
        let prevNode = currentNode.prev;
        let nextNode = currentNode.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        // currentNode 연결 끊기
        currentNode.prev = null;
        currentNode.next = null;

        this.length--;
        return currentNode;
    }

}

const dl = new DoublyLinkedList();

dl.push(1);
dl.push(2);
dl.push(3);

console.log(dl.remove(1));

//console.log(dl);