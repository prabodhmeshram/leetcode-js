//https://leetcode.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let left=0;
    if(s.length === 0) return true;
    s = s.replace(/[^a-zA-Z0-9+]+/gi, '').toLowerCase();
    let right = s.length-1;
    while(right > left){
        if(s[left] !== s[right]) {
            return false;
        };
        --right;
        ++left;
    }
    return true;
    
};