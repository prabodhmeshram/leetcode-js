/**
 * https://leetcode.com/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let sizeOfZeros = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0 && nums[i + 1] === 0) {
      sizeOfZeros++;
    } else if (nums[i] === 0 && nums[i + 1] !== 0) {
      nums[i - sizeOfZeros] = nums[i + 1];
      nums[i + 1] = 0;
    }
  }
};
