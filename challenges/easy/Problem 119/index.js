/**
 * leetcode.com/problems/pascals-triangle-ii
 * @param {number} rowIndex
 * @return {number[]}
 */
let memo = [];
var getRow = function (rowIndex) {
  if (rowIndex === 0) {
    memo[rowIndex] = [1];
    return memo[rowIndex];
  }

  memo[rowIndex] = [];
  for (let i = 0; i <= rowIndex; i++) {
    if (i === 0 || i === rowIndex) memo[rowIndex].push(1);
    else {
      if (!memo[rowIndex - 1]) {
        memo[rowIndex - 1] = getRow(rowIndex - 1);
      }
      let preRow = memo[rowIndex - 1];
      memo[rowIndex].push(preRow[i - 1] + preRow[i]);
    }
  }
  return memo[rowIndex];
};
