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

