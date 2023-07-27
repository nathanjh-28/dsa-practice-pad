console.log('merge sort')

/*

What is Merge Sort?
Merge sort takes advantage of the fact that a an array with a length of 1 or 0 is sorted.  Merge sort uses recursion to break an array down to arrays that are 1 or 0 in length and then merges them back together.  While merging sorted arrays, it makes evaluations so that the new merged array is also sorted.  

Complexity
Because you are cutting the array in half until you have single items, the first phase is log N operations.  If there are 8 items you would cut it in half 3 times to get single item arrays.  O log base 2 of 8 is 3.  Then when it comes time to merge the array back together you must have an operation for every item which would be Big of N.  The overall complexity is Big O of N * log N.  Because you rely on recursion, this algorithm can be hard on your call stack if your computer power is limited or if the list is obscenely long.  In addition if you have a fairly small dataset you might better off with bubble or insertion sort.

Pseudocode

2 functions, merge and mergeSort.

merge
takes in two sorted arrays
create an empy array to return
loops through both at the same time, use a while loop to keep track of two variables that evaluate if you are at the end of each array.  
push the lower of the two values and increment the counter for that array.  
if one of the arrays has been pushed completely, you can just push the remainder of the other array, no more evaluations needed.

mergeSort
takes in an unsorted array and returns the array sorted.
uses recursion, so need a base case.  if the array is length of 1 or zero return that array.
create a variable called middle to figure out the middle of the array by dividing the length by two and flooring it. 
RECURSION!!! 
variable for left, slice the array in half using array slice and mid, run mergeSort on this new shallow array.
variable for right, slice the array in half using slice and mid and run mergeSort on this new shallow array.
return merge() of the left and right.

*/

function merge(arr1, arr2) {
    let result = [];
    let i = 0; let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);

}

// TESTS

function testMergeSort() {
    // Test Case 1
    const arr1 = [38, 27, 43, 3, 9, 82, 10];
    const result1 = mergeSort(arr1);
    const expected1 = [3, 9, 10, 27, 38, 43, 82];
    console.log("Test Case 1:", arraysAreEqual(result1, expected1));

    // Test Case 2
    const arr2 = [];
    const result2 = mergeSort(arr2);
    const expected2 = [];
    console.log("Test Case 2:", arraysAreEqual(result2, expected2));

    // Test Case 3
    const arr3 = [5];
    const result3 = mergeSort(arr3);
    const expected3 = [5];
    console.log("Test Case 3:", arraysAreEqual(result3, expected3));

    // Test Case 4
    const arr4 = [100, 1000, 10, 10000, 1];
    const result4 = mergeSort(arr4);
    const expected4 = [1, 10, 100, 1000, 10000];
    console.log("Test Case 4:", arraysAreEqual(result4, expected4));

    // Test Case 5
    const arr5 = [1, 1, 1, 1, 1];
    const result5 = mergeSort(arr5);
    const expected5 = [1, 1, 1, 1, 1];
    console.log("Test Case 5:", arraysAreEqual(result5, expected5));
}

function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

testMergeSort();
