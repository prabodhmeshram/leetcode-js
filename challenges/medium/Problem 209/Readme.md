### Sliding Window Pattern

We use the sliding window pattern here.

We slide the window to the right till we get the current Window
sum greater or equal to target. When we reach such a point,
we check the currWindow length and store it.

We reduce the window size from left and subtract the element that
was removed from the current window. We again check if current sum still
is greater than target, we store the new min length and this follows
till we reach the end of the window.

Code

```
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let right=0
    let left=0;
    let currWSum= 0;
    let minLen = Infinity;

    while(right <= nums.length && left < nums.length){
        if(currWSum >= target){
            const currLen = right - left;
            minLen = minLen > currLen ? currLen : minLen
            currWSum -= nums[left++]
        } else {
            currWSum += nums[right++]
        }
    }
    return minLen === Infinity ? 0 : minLen
};

```
