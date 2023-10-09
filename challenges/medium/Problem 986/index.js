/**
 * https://leetcode.com/problems/interval-list-intersections
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (intervalListA, intervalListB) {
  if (intervalListA.length === 0 || intervalListB.length === 0) return [];
  let ptrA = 0;
  let ptrB = 0;
  let result = [];

  while (ptrA < intervalListA.length && ptrB < intervalListB.length) {
    if (isOverLapping(intervalListA[ptrA], intervalListB[ptrB])) {
      result.push(getOverLap(intervalListA[ptrA], intervalListB[ptrB]));
    }
    intervalListA[ptrA][1] > intervalListB[ptrB][1] ? ptrB++ : ptrA++;
  }
  return result;
};

const isOverLapping = (A, B) => {
  return (A[1] >= B[0] && A[0] <= B[1]) || (B[1] >= A[0] && B[0] <= A[1]);
};

const getOverLap = (A, B) => {
  return [Math.max(A[0], B[0]), Math.min(A[1], B[1])];
};
