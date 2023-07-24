/* Node class
    constructor takes a value
    set the value property to be the value
    set the next property to be null

*/
class Node {
    //
}

/* Singly Linked List
    constructor takes no parameters
    establish a head as null
    establish a tail as null
    establish a length as 0
*/

class SinglyLinkedList {
    //

    /* Push
        function should accept value
        create a new node using the value passed to the function
        if there is no head property then set the head and the tail to be the newly created node.
        otherwise set the next property of the tail to be the new node.  Update tail to be the new node.
        increment length by 1
        return the linked list
        */

    push() {
        //
    }
    /* Pop
        takes no arguments
        if there are no nodes, return undefined
        make a variable called current and set it to the head
        make a newtail variable and set it to current -- right now the head and new tail are current
        while loop with condition that current.next is truthy and set current to be current.next at the end.
            - reassign newtail to current
        set newtail next to be null
        set newtail to be the list's tail
        length--
        edge case, if the length is now 0, we need to make the head and tail null
        return current since it had no next and is now popped.
    */
    pop() {
        //
    }

    /*
    shift
    if no nodes, return undefined
    store temp variable for head
    reassign the next on the head to be the new head.  
    decrement the length
    Return the temp variable with the old head. 
    */

    shift() {
        //
    }

    /*
    unshift
    takes in value as an argument
    creates a new node with value
    if there is no head, set the head to be the newnode and increment length
    set the next on the new node to be the head.
    set the list's head to be the new node
    add to the length
    return list?
    */
    unshift() {
        //
    }

    /*
        Get
        "Retrieve a node at a given index"
        edge case - if given index is larger than length or less than zero return undefined
        create a variable to keep track of our working index
        set current to be the head
        create while loop to increment the index and update the current condition will be if our counter and the index are equal
        check if index is === given index
        once it is equal, return the current.val
        return the node
    */

    get() {
        //
    }
    /* 
        Set 
        takes in an index and a value,
        use the get function to find the node and should return the found node
        if node is not found return false
        if it is found update the node with the new value
        return true 
    */

    set() {
        //
    }
    /*
        Insert
        args: idx and a val
        if the index is greater than the length or less than 0 return false
        create a new node
        if idx is 0, use unshift() and return true
        if the idx is equal to the length then use push() and return true
        use get to find the node that is one before where we need to insert by using idx-1
        once we have the prevNode, set newNode's next to be the prevNode's next
        and the prevNode next is set to the newNode
        increment length
        return true
    
        !! will provide a return of true rather than the return of that get or unshift functions
    */

    insert() {
        //
    }
    /*
        Remove
        takes in an index and removes an item and updates the next pointers.
        if index is less than zero or greater than or equal to length, return undefined
        if index is zero use shift() 
        if the index is equal to length-1 then use pop()
        use get and retrieve the node at index-1
        set the next propert on that node to be the property of the next next node
        decrement length
        return value of the node removed
    */

    remove() {
        //
    }

    /*
        Reverse
        create a variable next, prev, current
        current = head
        head = tail
        prev is null because the first run we are starting with the new tail and tail's have a null next value.
        
        loop thru the list
        assign the next variable to be the current node's next
        assign the next property on current to be the previous
        assign previous to be the current node
        assign the current node to be the next variable
        assign the current value to be value of the next variable
        return the list
    */

    reverse() {
        //
    }



    /*
    Clear 
    removed all nodes
    */

    clear() {
        //
    }

    print() {
        //
    }

}

console.log('Begin Tests')
// Testing for Node class

const node = new Node(42);
console.log("Node Test:");
console.log(node.val === 42); // Should print true
console.log(node.next === null); // Should print true

// Testing for SinglyLinkedList class

const list = new SinglyLinkedList();

console.log("Push Test:");
list.push(10);
list.push(20);
list.push(30);
console.log(list.head.val === 10); // Should print true
console.log(list.tail.val === 30); // Should print true
console.log(list.length === 3); // Should print true
console.log(list.print())

console.log("Pop Test:");
const removedValue = list.pop();
console.log(removedValue.val === 30); // Should print true
console.log(list.length === 2); // Should print true
console.log(list.tail.next === null); // Should print true

// Add more tests for other methods

// For example:

console.log("Shift Test:");
const shiftedValue = list.shift();
console.log(shiftedValue.val === 10); // Should print true
console.log(list.length === 1); // Should print true
console.log(list.head.val === 20); // Should print true

console.log("Unshift Test:");
list.unshift(5);
console.log(list.length === 2); // Should print true
console.log(list.head.val === 5); // Should print true

console.log("Get Test:");
const nodeAtIndex1 = list.get(1);
console.log(nodeAtIndex1.val === 20); // Should print true

console.log("Set Test:");
const isSet = list.set(0, 100);
console.log(isSet); // Should print true
console.log(list.head.val === 100); // Should print true

console.log("Insert Test:");
list.insert(1, 200);
console.log(list.length === 3); // Should print true
console.log(list.head.next.val === 200); // Should print true

console.log("Remove Test:");
const removedVal = list.remove(1);
console.log(removedVal === 200); // Should print true
console.log(list.length === 2); // Should print true
//console.log(list.head.next === null); // Should print true

console.log("Reverse Test:");
list.push(51); list.push(0); list.push(101);
console.log(list.print())
list.reverse();
console.log('REVERSED')
console.log(list.print())
console.log(list.head.val === 101); // Should print true
console.log(list.tail.val === 100); // Should print true


console.log("Clear Test:");
list.clear();
console.log(list.length === 0); // Should print true
console.log(list.head === null); // Should print true
console.log(list.tail === null); // Should print true

// Tests for expected false results
console.log('EDGE TESTS')
console.log("Pop Test (Empty List):");
const poppedValueFromEmptyList = list.pop();
console.log(poppedValueFromEmptyList === undefined); // Should print true

console.log("Shift Test (Empty List):");
const shiftedValueFromEmptyList = list.shift();
console.log(shiftedValueFromEmptyList === undefined); // Should print true

console.log("Get Test (Out of Range):");
const outOfRangeNode = list.get(5);
console.log(outOfRangeNode === undefined); // Should print true

console.log("Set Test (Out of Range):");
const isSetOutOfRange = list.set(5, 1000);
console.log(isSetOutOfRange === false); // Should print true

console.log("Insert Test (Out of Range):");
const isInsertOutOfRange = list.insert(5, 2000);
console.log(isInsertOutOfRange === false); // Should print true

console.log("Remove Test (Out of Range):");
const removedValueOutOfRange = list.remove(5);
console.log(removedValueOutOfRange === undefined); // Should print true
