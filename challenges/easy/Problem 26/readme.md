## Multiple Approaches to solve the problem

### First approach

First Approach is a Brute force Approach to solve the problem

Store only unique elements in the another array
and then replace the new array with old one

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let uniqueArray = []
    for(let i= 0; i < nums.length ; i++){
        if(uniqueArray.indexOf(nums[i]) === -1){
            uniqueArray.push(nums[i])
        }
    }

    // reset the original nums array
    nums.length = 0
    uniqueArray.forEach((key) => nums.push(key))
};

```

### Stats from LeetCode

#### Solution one stats

![Alt text](sol1.png)
