## Multiple Approaches to solve the problem

### First approach

First Approach is a Brute force Approach to solve the problem

We iterate through the range and create 2d array with incremental addition of columns
based on current row.

The solution here is to simply init empty array. The logic here is for each
row check if the cell is first cell or last cell of the row, if it is then
simple store 1 there, if the cell lies between first and last row, then simply
do summation of previous rows adjacent cells to fill the current cell.

```
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let resultArr = [];
  for (let i = 0; i < numRows; i++) {
    resultArr[i] = [];
    for (let j = 0; j <= i; j++) {
      // Check if current column is not first
      // and last element in the row else fill 1
      if (j !== 0 && j !== i) {
        resultArr[i][j] = resultArr[i - 1][j - 1] + resultArr[i - 1][j];
      } else {
        resultArr[i][j] = 1;
      }
    }
  }
  return resultArr;
};


```

`NOTE: Seems like this was the most optimal approach, we do not need to run the
 computation to calculate the Combinatorial operation to get each cell
 we simply use pre computed cells to arrive our solution which is more efficient
 rather `

### Stats from LeetCode

#### Solution one stats

![Alt text](sol1.png)
