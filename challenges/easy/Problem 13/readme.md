## Problem

https://leetcode.com/problems/roman-to-integer

## Solution Approach

We use a hashmap to store the roman to integer map.

This is used when we iterate over the roman string.

The intuition is to iterate over the roman string and get the associated number,
we cumulatively add the numbers we found. The only trick here is to check the
last roman integer value when we proceed with the next roman character, if the
current roman character is greater than previous then we subtract the last
roman number we already added in the sum. But we need to remove the earlier
addition of the lower number as that is not considered valid addition, so we
subtract twice the value of last lower number to compute the resulting value.

```
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanHash = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
    }

    let num = romanHash[s[0]]
    let lastNum = romanHash[s[0]]
    for(let i=1; i < s.length; i++){
        const currNum = romanHash[s[i]]
        if(currNum > lastNum){
            num += currNum - lastNum * 2
        }else {
            num += currNum
        }
        lastNum = currNum
    }
    return num
};
```

## Leetcode Stats

![Alt text](image.png)
