/**
 * https://leetcode.com/problems/rotate-image/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const len = matrix.length;
  for (let row = 0; row < matrix.length; row++) {
    let currRow = matrix[row];
    for (let col = 0; col < row; col++) {
      let data = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = data;
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    let currRow = matrix[row];
    for (let col = 0; col < currRow.length / 2; col++) {
      let data = matrix[row][col];
      matrix[row][col] = matrix[row][len - col - 1];
      matrix[row][len - col - 1] = data;
    }
  }
};
