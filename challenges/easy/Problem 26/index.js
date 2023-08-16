/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let uniqueArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (uniqueArray.indexOf(nums[i]) === -1) {
      uniqueArray.push(nums[i]);
    }
  }

  // reset the original nums array
  nums.length = 0;
  uniqueArray.forEach((key) => nums.push(key));
};
