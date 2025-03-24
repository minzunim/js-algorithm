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

    // 너비 우선 탐색 (트리의 모든 노드를 순회)
    BSF() {
        var data = [],
            queue = [],
            node = this.root;

        // 큐에 root를 넣어준다
        queue.push(node);

        while (queue.length) {
            // 큐 맨 앞에서 제거
            node = queue.shift();
            // 제거한 노드를 data에 담음
            data.push(node);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
}

const tree = new BinarySearchTree();

tree.insert(3);
tree.insert(4);
tree.insert(5);

console.log(tree.find(3));

// * 자식은 부모를 기억하지 않음. 오직 부모가 자식을 left나 right로 저장함.
// 3
//  \
//   4
//    \
//     5
// 위 경우 3의 right는 4지만, 4의 left는 3이 아님. 4의 right는 5지만, 5의 left는 4가 아님.