//https://leetcode.com/problems/trapping-rain-water/

/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(heights) {
    
    let totalWater = 0;
    // choose two pivots start and end
    let left = 0;
    let right = heights.length - 1;
    let maxLeft = 0;
    let maxRight = 0;
    
    while(left < right){
        if(heights[left] >= heights[right]){
            if(maxRight >= heights[right]){
                totalWater += maxRight - heights[right];
            }else{
                maxRight = heights[right];
            }
            right--;
        }else{
            if(maxLeft >= heights[left]){
                totalWater += maxLeft - heights[left];
            }else{
                maxLeft = heights[left];
            }
            left++;
        }
        
    }
    return totalWater;
};