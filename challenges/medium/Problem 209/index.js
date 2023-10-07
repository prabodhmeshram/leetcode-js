/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let right = 0;
  let left = 0;
  let currWSum = 0;
  let minLen = Infinity;

  while (right <= nums.length && left < nums.length) {
    if (currWSum >= target) {
      const currLen = right - left;
      minLen = minLen > currLen ? currLen : minLen;
      currWSum -= nums[left++];
    } else {
      currWSum += nums[right++];
    }
  }
  return minLen === Infinity ? 0 : minLen;
};
