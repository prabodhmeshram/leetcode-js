// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    
    if(s.length <= 1) {
        return s.length;
    }
    
    let maxLength = 0;
    let charHash = {};
    let left = 0;
    
    for(let right=0;right < s.length; right++){
        const currentChar = s[right];
        if(isNaN(charHash[currentChar]) || charHash[currentChar] < left){
            charHash[currentChar] = right;
            maxLength = Math.max(right+1-left, maxLength)
        }else{
            left = charHash[currentChar] + 1;
            charHash[currentChar] = right;
        }
    }
    
    return maxLength;
};