// https://leetcode.com/problems/valid-palindrome-ii/
/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
    let isPalindrome = true; 
    const noOfChars = s.length;
    if ( noOfChars <= 2) {
        return true
    };
    
    let left=0;
    let right = noOfChars -1;
    while(left < right){
        if(s[left] !== s[right]){
            isPalindrome = checkIfPalidrome(s, left+1, right) || checkIfPalidrome(s, left, right-1);
            return isPalindrome;
        }
        right--;
        left++;
    }
    return isPalindrome;
};

const checkIfPalidrome = function(str, left, right){
    while(right > left){
        if(str[left] !== str[right]) {
            return false;
        };
        --right;
        ++left;
    }
    return true;
}