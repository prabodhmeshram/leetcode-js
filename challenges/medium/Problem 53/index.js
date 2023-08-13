/**
 * https://leetcode.com/problems/maximum-subarray
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // find the max element in the array
  let max = nums[0];
  for (i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  // case where the array is full of negative
  // numbers or max number is zero, return max itself
  // save the iterations
  if (max <= 0) return max;

  // the idea to find the max sum was to
  // compare the current value
  let sum = 0;
  for (i = 0; i < nums.length; i++) {
    // check if current val is greater than 0
    // else skip it
    if (sum + nums[i] > 0) {
      sum += nums[i];
      if (sum > max) {
        // if the current sum of
        // subarray is greater than
        // max element, replace the max
        max = sum;
      }
    } else {
      sum = 0;
    }
  }

  return max;
};
