/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      // check if zero
      // then proceed marking the corresponding
      // row and column as -1
      if (row[j] === 0) {
        markRowCol(matrix, i, j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === -10000098) {
        row[j] = 0;
      }
    }
  }
  return matrix;
};

function markRowCol(matrix, i, j) {
  const row = matrix[i];
  for (let l = 0; l < row.length; l++) {
    if (row[l] !== 0) {
      row[l] = -10000098;
    }
  }

  const rowCount = matrix.length;
  for (let l = 0; l < rowCount; l++) {
    if (matrix[l][j] !== 0) {
      matrix[l][j] = -10000098;
    }
  }
}
