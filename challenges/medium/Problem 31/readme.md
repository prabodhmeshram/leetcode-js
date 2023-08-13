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

### Second Approach

The new approach do not calculate all the permutations.
The new approach first checks if there exist a number
which is less than the lastIndex number starting from
secondLast index, it then continuously searches in reverse order
of the existing array if there exist a number which is
less than the last index.

If it founds such element it swaps the places with the last
index element. Then next step is sorting the rest of the array
so that it becomes the next permutation

The new array is merged with the original array in place
with the last elements and hence the permutation found

If there is a case when there is no element found less than the last
element, then it simply finds the next greater element between secondLast
element and the last one. It increments the secondLast counter
and selects array of elements after that in sorted order

If it finds any element which is greater than the current secondLast
elements it breaks the loop

Swaps the places with the greatest number found in the nums array
at the target index and replaced in slice of sorted array.

The logic is pretty complex but is also a possible solution
that saves calculating all the permutations

The Time Complexity is O(n) + O(n _ n _ n) ( looping to find number, sorting the array, finding Element)
Not an ideal Complexity and also the space complexity is O(n) + O(1)

Not very ideal solution, but its for the worst case scenario, for an average
scenario it would be pretty faster.

JS bench marking shows the code is performant and returns withing ~0.5 ms for arrays of length 100
Leetcode benchmark is not very reliable tbh

```
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var nextPermutation = function(nums) {
  let lastIndex = nums.length - 1
  let swappable = false
  let secondLast = lastIndex-1

  while(!swappable){
    if(nums[lastIndex] > nums[secondLast]){
      let swap = nums[lastIndex]
      nums[lastIndex] = nums[secondLast]
      nums[secondLast] = swap
      swappable = true
    } else {
      --secondLast
    }

    if(secondLast === -1){
      break
    }
  }

  if(secondLast === -1){

    // If the element was not found above.
    // do a reverse second biggest element search
    secondLast = lastIndex - 1
    let count = -1
    let foundNum;
    let numSlice;
    while(!foundNum){
      numSlice = nums.slice(count)
      numSlice = numSlice.sort((a,b)=> a-b)

      foundNum = numSlice.find(n=> n > nums[secondLast])
      if(!foundNum){
        count--
        secondLast--
      }else{
        let targetIndex = numSlice.findIndex(n=> n === foundNum)
        let swap = numSlice[targetIndex]
        numSlice[targetIndex] = nums[secondLast]
        nums[secondLast] = swap
      }
    }
    let a = 0
    for(let i = nums.length - numSlice.length; i < nums.length; i++){
      nums[i] = numSlice[a++]
    }
  } else {
    let remainingArray = []

    for(let i = secondLast+1; i < nums.length; i++){
      remainingArray.push(nums[i])
    }

    remainingArray = remainingArray.sort((a,b)=> a-b)
    let a = 0
    for(i=nums.length-remainingArray.length; i< nums.length; i++){
      nums[i] = remainingArray[a++]
    }
  }
}
```

### Stats from LeetCode

#### First Approach

First approach result in Time Limit exceeded
