console.log('bubble sort')

/*
What is Bubble Sort?

input= unsorted array
output = same array but sorted

Bubble sort is a sorting algorithm for arrays where each item in the array is compared to it's neighbor and if it is greater, it swaps places with it's neighbor, on and on, until it no longer is greater than it's neighbor and the next item in the array is compared to it's neighbors.  In this sorting algorithm, the largest values "bubble up" to the top.  Hence the name.  

Complexity:
This is a quadratic time algorithim, Big O of N squared because you must loop each item through the array, you will end up running it the length of the array * the length of the array.  There is a couple of optimizations that can help reduce time.  

Shorten the number of evaluations by avoiding sorting the section of the array that is already sorted at the end.  With every pass, decrement the number of evaluations you perform by 1.  

Finally, if the array is almost sorted, you can use a variable to check if there were any swaps made and if not, you can quit looping and return the sorted array, reducing your time dramatically for arrays that are almost sorted.

*/

/*
Pseudocode:

Optional: build a helper function called swap that takes an array and two indexes and returns the array with the values at those indexes swapped.

Start looping from the end of the array with a variable, i.
Start looping from the beginning with a variable called j until j is === i-1 
if arr[j] is greater than arr[j+1], swap them.

if you call swap during the inner loop swap, update the swap variable.  In the outer loop, reset the swap variable.  

*/

function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr;
}

function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length - 1; i > -1; i--) {
        noSwaps = true;
        for (let j = 0; j <= i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        if (noSwaps) return arr;
    }
    return arr;
}

function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

function testBubbleSort() {
    // Test 1: General Test with Unsorted Array
    let arr1 = [64, 34, 25, 12, 22, 11, 90];
    let sortedArr1 = bubbleSort([...arr1]); // Create a copy to keep the original array intact
    console.log("Test 1:", arraysAreEqual(sortedArr1, [11, 12, 22, 25, 34, 64, 90]));

    // Test 2: Test with Sorted Array (Best Case)
    let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
    let sortedArr2 = bubbleSort([...arr2]);
    console.log("Test 2:", arraysAreEqual(sortedArr2, [1, 2, 3, 4, 5, 6, 7, 8]));

    // Test 3: Test with Reverse Sorted Array (Worst Case)
    let arr3 = [8, 7, 6, 5, 4, 3, 2, 1];
    let sortedArr3 = bubbleSort([...arr3]);
    console.log("Test 3:", arraysAreEqual(sortedArr3, [1, 2, 3, 4, 5, 6, 7, 8]));

    // Test 4: Test with Array with Repeated Elements
    let arr4 = [5, 2, 9, 5, 5, 8, 3];
    let sortedArr4 = bubbleSort([...arr4]);
    console.log("Test 4:", arraysAreEqual(sortedArr4, [2, 3, 5, 5, 5, 8, 9]));

    // Test 5: Test with an Empty Array
    let arr5 = [];
    let sortedArr5 = bubbleSort([...arr5]);
    console.log("Test 5:", arraysAreEqual(sortedArr5, []));

    // Test 6: Test with Array containing a single element
    let arr6 = [10];
    let sortedArr6 = bubbleSort([...arr6]);
    console.log("Test 6:", arraysAreEqual(sortedArr6, [10]));

    // Test 7: Test with Array containing negative numbers
    let arr7 = [-9, -5, -12, -7, -2];
    let sortedArr7 = bubbleSort([...arr7]);
    console.log("Test 7:", arraysAreEqual(sortedArr7, [-12, -9, -7, -5, -2]));
}

testBubbleSort();
