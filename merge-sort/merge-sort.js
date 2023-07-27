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


