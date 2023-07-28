console.log('binary search trees')

/*

Trees are node like hierarchical structures where nodes have parents and children connected by edges or links, similar to how nodes in a linked list are connected by a next or previous property.  

Binary Trees are a type of tree where each node cannot have more than two children, often called left or right.

Binary Search Trees is a sorted tree structure where the left child is smaller than the parent and the right child is bigger.  

*/



// -----  Tree Node --------
/* The node will have a property for it's value and a left and right for it's children.  */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BSTree {
    constructor() {
        this.root = null;
    }
}