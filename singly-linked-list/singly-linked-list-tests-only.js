










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
