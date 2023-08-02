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
    Takes in value, creates a node and adds it to the BST. Returns the tree.
    Create a new node.  
    If there isn't a root, make that node the root.  Return BST

    create a variable called current.
    
    Create a while loop based on a boolean.

    if the node is less than the current value and current.left exists.  reassign current to current.left If not insert the node at current.left.  return BST.

    if the node is greater than the current value, check if current.right exists.  if so, set current to current.right.  if not insesrt new node at current.right.  return BST

    If there is a node that has the same value as the node we are inserting, return undefined.  (it's already in the BST)


     */

    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode
                    return this;
                }
                current = current.right;
            }
        }
    }

    /*

    Find
    Take in a value and check to see if it is present in the BST.  If found return the node and if not found return null.

    if the root of the tree is null, return null

    set a variable for the root called current
    set a boolean variable to false to track whether we found the node.

    while loop based on if there is a current variable and if found is still false

    if the value is less than the current value, set current to current.left

    if the value is greater than the current value, set current to current.right

    else, found is assigned to true

    return current.

    */

    find(value) {
        if (this.root === null) return null;
        let current = this.root;
        let found = false;
        while (!found && current) {
            if (value < current.value) {
                current = current.left;
            }
            else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return null;
        return current;
    }

    /*
            Breadth First Search

            Create a queue (can be an array) and a variable to store the values of the nodes visited.  Place the root inside the queue
            loop as long as their is anything inside the queue
            -remove a node from the queue and push it to the stored values.
            - if there are any nodes from the one removed, add them to the cue (on the left or on the right)

            return a variable that stored all the values

    */

    BFS() {
        if (this.root === null) return undefined;
        let queue = [];
        let stored = [];
        let node = this.root
        queue.push(node);
        while (queue.length > 0) {
            node = queue.shift();
            stored.push(node.value);
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return stored;

    }

    /* 
            Depth First Search
            PreOrder - read node data first, traverse later
            PostOrder - read node data last, traverse first
            InOrder - traverse one side, read node data, traverse the other side.

            create a variable to store array the values visited
            create a variable to store the current node, assign this.root.
            helper function
            - push the value to the stored array
            - if left, call helper function
            - if right, call helper function

            return stored values

    */

    DFS_PreOrder() {
        let store = [];
        let current = this.root;

        function traverse(node) {
            store.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right)
        }

        traverse(current)

        return store;
    }

}

/*
function runTests() {
    // Test 1: Create a BST and insert nodes
    const bst = new BinarySearchTree();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(7);
    bst.insert(12);
    bst.insert(17);
}
    console.log('Test 1: Insertion');
    console.log('Expected: 10 -> 5 -> 15 -> 3 -> 7 -> 12 -> 17');
    console.log('Actual:', bst.BFS().join(' -> '));
    console.log('Result:', bst.BFS().join(' -> ') === '10 -> 5 -> 15 -> 3 -> 7 -> 12 -> 17');
    console.log('-----------------------');

    // Test 2: Find existing and non-existing nodes
    console.log('Test 2: Find');
    console.log('Expected: Found: 3, Found: 15, Not Found: 8');
    console.log('Actual:');
    console.log('Found:', bst.find(3) !== null ? '3' : 'Not Found');
    console.log('Found:', bst.find(15) !== null ? '15' : 'Not Found');
    console.log('Not Found:', bst.find(8) !== null ? '8' : 'Not Found');
    console.log('Result:', bst.find(3) !== null && bst.find(15) !== null && bst.find(8) === null);
    console.log('-----------------------');

    // Test 3: DFS Pre-Order
    console.log('Test 3: DFS Pre-Order');
    console.log('Expected: 10 -> 5 -> 3 -> 7 -> 15 -> 12 -> 17');
    console.log('Actual:', bst.DFS_PreOrder().join(' -> '));
    console.log('Result:', bst.DFS_PreOrder().join(' -> ') === '10 -> 5 -> 3 -> 7 -> 15 -> 12 -> 17');
    console.log('-----------------------');
}
*/
runTests();
