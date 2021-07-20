//https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(heights) {
    let maxArea = 0;
    let end = heights.length-1;
    let start=0;
    while(start<end){
        maxArea = Math.max(maxArea, Math.min(heights[start],heights[end]) * (end - start));
        heights[start] <= heights[end] ? ++start : --end;
    }
    return maxArea;
};