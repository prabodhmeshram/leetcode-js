/**
 * https://leetcode.com/problems/next-permutation/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const target = nums.join("");

  nums = nums.sort();
  let store = [];
  let stack = [];
  let freq = [];

  for (let i = 0; i <= nums.length; i++) freq[i] = 0;

  getPermutations(stack, nums, store, freq);

  let found = false;
  for (let i = 0; i < store.length; i++) {
    if (found) {
      // for some reason
      // leetcode is not accepting
      // re assignment of array values
      // so had to empty the original array
      // then push the individual values manually
      nums.length = 0;
      store[i].split("").forEach((val) => nums.push(val));
      return;
    }
    if (target === store[i]) {
      // update value in next iteration
      // as weirdly store[i+1] is undefined
      // in leetcode compiler
      found = true;
    }
  }

  return;
};

function getPermutations(stack, nums, store, freq) {
  if (stack.length === nums.length) {
    const str = stack.join("");
    if (!store.find((s) => str == s)) {
      store.push(stack.join(""));
    }
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (!freq[i]) {
      stack.push(nums[i]);
      freq[i] = 1;
      getPermutations(stack, nums, store, freq);
      freq[i] = 0;
      stack.pop();
    }
  }
}
