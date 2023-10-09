/**
 * https://leetcode.com/problems/insert-interval/
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (newInterval.length === 0) return intervals;
  if (intervals.length === 0) return [newInterval];

  let result = [];
  let seenInterval = 0;
  let hasNewIntervalMerged = false;

  while (!hasNewIntervalMerged && seenInterval < intervals.length) {
    if (isIntervalBefore(newInterval, intervals[seenInterval])) {
      result.push(newInterval);
      hasNewIntervalMerged = true;
    } else {
      result.push(intervals[seenInterval]);
      if (isOverlapping(result.at(-1), newInterval)) {
        result[result.length - 1] = mergeIntervals(result.at(-1), newInterval);
        hasNewIntervalMerged = true;
      }
      seenInterval++;
    }
  }

  if (!hasNewIntervalMerged) {
    result.push(newInterval);
  } else {
    for (let i = seenInterval; i < intervals.length; i++) {
      if (isOverlapping(result.at(-1), intervals[i])) {
        result[result.length - 1] = mergeIntervals(result.at(-1), intervals[i]);
      } else {
        result.push(intervals[i]);
      }
    }
  }

  return result;
};

const isIntervalBefore = (intervalA, intervalB) => {
  return intervalA[1] < intervalB[0];
};

const isOverlapping = (intervalA, intervalB) => {
  return intervalA[1] >= intervalB[0];
};

const mergeIntervals = (intervalA, intervalB) => {
  return [
    Math.min(intervalA[0], intervalB[0]),
    Math.max(intervalA[1], intervalB[1]),
  ];
};
