/**
 * https://leetcode.com/problems/rotate-image/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const len = matrix.length;
  let otherMat = [...Array(len)].map((e) => Array(1).fill(0));
  for (let row = 0; row < len; row++) {
    for (let col = 0; col < len; col++) {
      let fixedCol = len - row - 1;
      otherMat[col][fixedCol] = matrix[row][col];
    }
  }

  for (let row = 0; row < len; row++) {
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < len; col++) {
        matrix[row][col] = otherMat[row][col];
      }
    }
  }
};
