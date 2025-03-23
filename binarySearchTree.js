class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // 루트가 있는지 확인 -> 없으면 새로운 노드가 루트가 됨
    // 루트가 아니면 새로운 노드가 루트보다 큰지 작은지 확인
    // 만약 루트보다 더 크다면 오른쪽으로 가야함
    // 그 오른쪽에 또 노드가 있다면 한번 더 반복
    // 없다면 오른쪽에 착지

    // 만약 루트보다 작다면 왼쪽으로
    // 왼쪽에 루트가 있는지 확인
    // 있다면 같은 루틴 반복
    // 없다면 착지
    insert(val) {
        let newNode = new Node(val);
        // root에서 시작
        if (!this.root) {
            this.root = newNode;
        } else {
            let current = this.root;
            while (true) {
                if (val === current.val) return undefined;
                if (val < current.val) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    // current를 이동
                    current = current.left;
                } else if (val > current.val) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
        return tree;
    }

    find(val) {
        // root 가 없는 경우
        if (!this.root) return false;
        // root 가 하나인 경우, fount: 값을 찾았는지 여부
        let current = this.root, found = false;
        while (current && !found) {
            if (val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            } else {
                found = true;
            }
        }
        return current;
    }
}
