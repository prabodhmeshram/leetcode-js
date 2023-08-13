## Multiple Approaches to solve the problem

### First approach

First Approach is a Brute force Approach to solve the problem

First approach is computing all the permutations first, then find the target
array in the list, then just send out the next element in the list
as the result

Some optimizations are done to lower the compute cycle. When computing all
the permutation, store them as string, rather than array of numbers.
Reason being its easier to compare string of arrays rather comparing
array of arrays with another needle array of numbers, definitely gonna
kick the max stack reached for higher limits.

Another reason is when the seed numbers have duplications the logic to
create permutation do not consider the fact the permutations are not
straight forward for distinct number seed. There are chances of repetition
in the generation which could result in false result.
Converting the store in string helps first comparing if the string is
already not in the store, then only push it, which makes sure we're generating
proper permutations list

```
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

```

### Stats from LeetCode

#### First Approach

First approach result in Time Limit exceeded
