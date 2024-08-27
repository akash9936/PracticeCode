class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    isTreeEmpty() {    return this.root === null;}
    addTree(val) {
        let newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.addChild(newNode, this.root);
        }
    }

    addChild(newNode, existingRoot) {
        if (existingRoot.value > newNode.value) {
            if (existingRoot.left === null) {
                existingRoot.left = newNode;
            } else {
                this.addChild(newNode, existingRoot.left);
            }
        } else {
            if (existingRoot.right === null) {
                existingRoot.right = newNode;
            } else {
                this.addChild(newNode, existingRoot.right);
            }
        }
    }
}

let bst = new BST();
bst.addTree(20);
bst.addTree(10);
bst.addTree(5);
bst.addTree(40);
bst.addTree(15);

let result = JSON.stringify(bst, null, 2);
console.log(`Result is bst ${result}`);
