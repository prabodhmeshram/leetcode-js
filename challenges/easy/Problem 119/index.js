/**
 * leetcode.com/problems/pascals-triangle-ii
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];

  let result = [];
  for (let i = 0; i <= rowIndex; i++) {
    if (i === 0 || i === rowIndex) result.push(1);
    else {
      let preRow = getRow(rowIndex - 1);
      result.push(preRow[i - 1] + preRow[i]);
    }
  }
  return result;
};
