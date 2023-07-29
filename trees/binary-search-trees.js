console.log('binary search trees')

/*

Trees are node like hierarchical structures where nodes have parents and children connected by edges or links, similar to how nodes in a linked list are connected by a next or previous property.  

Binary Trees are a type of tree where each node cannot have more than two children, often called left or right.

Binary Search Trees is a sorted tree structure where the left child is smaller than the parent and the right child is bigger.  

*/



// -----  Tree Node --------
/* The node will have a property for it's value and a left and right for it's children.  */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// ------- Binary Search Tree Class

class BinarySearchTree {
    constructor() {
        this.root = null;
    }



    // ----- Insert

    /*
    Create a new node.  If there isn't a root, make that node the root.
    check if the value of the root is bigger or smaller than the new node's value.  If it is bigger check if there is a node to the right.  If there is more, continue checking to the right.
     */

    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (currrent.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                    if (value > current.value) {
                        if (current.right === null) {
                            current.right = newNode
                            return this;
                        } else {
                            current = current.right;
                        }

                    }
                }
            }
        }

    }

}