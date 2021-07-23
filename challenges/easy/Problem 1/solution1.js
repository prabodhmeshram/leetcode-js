// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {

    let findNumberHash = {[nums[0]] : 0};
    for(i=1; i< nums.length; i++){
        let toFind = target - nums[i];
        if(toFind in findNumberHash){
            return [findNumberHash[toFind],i]
        }
        findNumberHash[nums[i]] = i;
    }
    return null
};