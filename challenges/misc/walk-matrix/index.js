const walkMatrix = (matrix) => {
  // Your solution here
  let resultArray = [];

  let colBound = matrix[0].length;
  let rowBound = matrix.length;
  let rowStart = 0;
  let colStart = 0;
  let reached = false;

  while (!reached) {
    for (let col = colStart; col < colBound; col++) {
      resultArray.push(matrix[rowStart][col]);
    }

    rowStart++;

    if (rowStart === rowBound) {
      break;
    }

    for (let row = rowStart; row < rowBound; row++) {
      resultArray.push(matrix[row][colBound - 1]);
    }

    colBound--;

    if (colStart === colBound) {
      break;
    }

    for (let col = colBound - 1; col >= colStart; col--) {
      resultArray.push(matrix[rowBound - 1][col]);
    }

    rowBound--;

    if (rowStart === rowBound) {
      break;
    }

    for (let row = rowBound - 1; row >= rowStart; row--) {
      resultArray.push(matrix[row][colStart]);
    }

    colStart++;

    if (colStart === colBound) {
      break;
    }
  }
  return resultArray;
};

// const matrix = [
//   [0, 1, 2, 3],
//   [11, 12, 13, 4],
//   [10, 15, 14, 5],
//   [9, 8, 7, 6],
// ];

const matrix = [[1], [2], [3], [4]];

console.log(walkMatrix(matrix));
