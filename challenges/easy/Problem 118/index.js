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
