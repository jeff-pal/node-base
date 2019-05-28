# Find the number!

Given an unsorted array of n elements, find if the element k is present in the array or not.
Complete the findNumber function in the editor below. It has 2 parameters:
  1. An array of integers, arr, denoting the elements in the array.
  2. An integer, k, denoting the element to be searched in the array.
The function must return a string 'YES' or 'NO' denoting if the element is present in the array or not.

Input Format

The first line contains an integer n, denoting the number of elements in the array arr.
Each line i of the n subsequent lines (where 0 <= i < n) contains an integer describing arr.
The next line contains an integer, k, the element that needs to be searched.

Constraints
  1 <= n <= 10^5
  1 <= arr[i] <= 10^9


Output Format
The function must return a string ,E.S. or 'NO" denoting if the element is present in the array or not. This is printed stdout by locked stub code in the editor.
sample input
```
5
1
2
3
4
5
1
```

Sample Output
```
YES
```
Explanation

```
5               => size of array
[1, 2, 3, 4, 5] => array
1               => number to be searched
```
