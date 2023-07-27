console.log('selection sort')

/*

What is Selection Sort?
Selection sort is a sorting algorithm where you loop through the array and keep track of the lowest value item and at the end swap it with the first item.  Repeat the process but instead swap with the second item, and so on until you have a sorted array.

Time Complexity
This is quadratic time because you must loop through the array for every instance of the array.  You can improve slightly by decrementing the operations in the inner loop every time it runs but it still comes out to quadratic time for the worst case scenario.  Where selection sort is best is in rare situations where the number of swaps is important because the worst case would be swapping N times rather than bubble sort which is constantly swapping as you sort.  

Pseudocode
swap helper function if desired.
function takes in an arr and returns that arr sorted
create a variable to keep track of the index where the lowest value is
loop through the array with an outer loop for the item that will get swapped by the lowest value item.  set this first item index to be lowest.
loop through the array with an inner loop starting at the outer loops starting point plus 1.  if an item is found with a lower value, update lowest with it's index
if the index of the lowest item is not the same as the index that you started with on the outer loop, then swap them.

return sorted array.
*/

function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr;
}

function selectionSort(arr) {
    let lowest;
    for (let i = 0; i < arr.length; i++) {
        lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) lowest = j;
        }
        if (i !== lowest) swap(arr, i, lowest);
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

function testSelectionSort() {
    // Test 1: General Test with Unsorted Array
    let arr1 = [64, 34, 25, 12, 22, 11, 90];
    let sortedArr1 = selectionSort([...arr1]); // Create a copy to keep the original array intact
    console.log("Test 1:", arraysAreEqual(sortedArr1, [11, 12, 22, 25, 34, 64, 90]));

    // Test 2: Test with Sorted Array (Best Case)
    let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
    let sortedArr2 = selectionSort([...arr2]);
    console.log("Test 2:", arraysAreEqual(sortedArr2, [1, 2, 3, 4, 5, 6, 7, 8]));

    // Test 3: Test with Reverse Sorted Array (Worst Case)
    let arr3 = [8, 7, 6, 5, 4, 3, 2, 1];
    let sortedArr3 = selectionSort([...arr3]);
    console.log("Test 3:", arraysAreEqual(sortedArr3, [1, 2, 3, 4, 5, 6, 7, 8]));

    // Test 4: Test with Array with Repeated Elements
    let arr4 = [5, 2, 9, 5, 5, 8, 3];
    let sortedArr4 = selectionSort([...arr4]);
    console.log("Test 4:", arraysAreEqual(sortedArr4, [2, 3, 5, 5, 5, 8, 9]));

    // Test 5: Test with an Empty Array
    let arr5 = [];
    let sortedArr5 = selectionSort([...arr5]);
    console.log("Test 5:", arraysAreEqual(sortedArr5, []));

    // Test 6: Test with Array containing a single element
    let arr6 = [10];
    let sortedArr6 = selectionSort([...arr6]);
    console.log("Test 6:", arraysAreEqual(sortedArr6, [10]));

    // Test 7: Test with Array containing negative numbers
    let arr7 = [-9, -5, -12, -7, -2];
    let sortedArr7 = selectionSort([...arr7]);
    console.log("Test 7:", arraysAreEqual(sortedArr7, [-12, -9, -7, -5, -2]));
}

testSelectionSort();