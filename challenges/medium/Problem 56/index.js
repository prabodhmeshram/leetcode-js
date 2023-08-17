/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 1) return intervals;
  let overLappingArray = [intervals[0]];
  for (let i = 0; i < intervals.length - 1; i++) {
    let overlap = null;
    if (intervals[i][1] >= intervals[i + 1][0]) {
      overlap = [intervals[i][0], intervals[i + 1][1]];
    }
    if (overlap) {
      const top = overLappingArray.length - 1;
      if (overLappingArray[top][1] >= overlap[0]) {
        overLappingArray[top] = [overLappingArray[top][0], overlap[1]];
      } else {
        overLappingArray.push(overlap);
      }
    } else {
      overLappingArray.push(intervals[i + 1]);
    }
  }
  return overLappingArray;
};
