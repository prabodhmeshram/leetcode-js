/**
 * @param {number[][]} pairs
 * @return {number}
 */

var findLongestChain = function (pairs) {
  let memo = [];
  pairs
    .sort((a, b) => {
      if (a[0] === b[0]) return a[1] - b[1];
      return a[0] - b[0];
    })
    .map((val, index) => (pairs[index] = val));

  for (let i = 0; i < pairs.length; i++) {
    if (!memo[i]) {
      memo[i] = getLengthForTargetIndex(i, pairs, memo);
    }
  }

  let max = 0;
  for (let i = 0; i < memo.length; i++) {
    if (max < memo[i]) {
      max = memo[i];
    }
  }
  return max;
};

var getLengthForTargetIndex = function (targetIndex, pairs, memo) {
  if (targetIndex === pairs.length - 1) {
    memo[targetIndex] = 1;
    return memo[targetIndex];
  }

  memo[targetIndex] = 1;
  let maxLen = 0;
  for (let i = targetIndex + 1; i < pairs.length; i++) {
    if (pairs[targetIndex][1] < pairs[i][0]) {
      let currLength;
      if (memo[i]) {
        currLength = memo[i];
      } else {
        currLength = getLengthForTargetIndex(i, pairs, memo);
      }
      if (maxLen < currLength) {
        maxLen = currLength;
      }
    }
  }
  memo[targetIndex] += maxLen;
  return memo[targetIndex];
};
