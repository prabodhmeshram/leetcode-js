/**
 * https://leetcode.com/problems/longest-palindromic-substring
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let maxLen = 0;
  let palindrome = "";

  for (let i = 0; i < s.length; i++) {
    // for odd palindrome
    let left = i;
    let right = i;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLen) {
        maxLen = right - left + 1;
        palindrome = getSubString(s, left, right);
      }
      left--;
      right++;
    }

    //  For even case
    left = i;
    right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLen) {
        maxLen = right - left + 1;
        palindrome = getSubString(s, left, right);
      }
      left--;
      right++;
    }
  }
  return palindrome;
};

const getSubString = (s, left, right) => {
  return s.substring(left, right + 1);
};

// Todo:: Extracting out the common method to get the maxLen and palindrome
// const getPalindromeAndMaxForRange = (s, left, right, existingMaxLen) => {
//   let maxLen = existingMaxLen
//   while(left >= 0 && right < s.length && s[left] === s[right]){
//       if( (right -left + 1) > maxLen){
//         maxLen = right -left + 1
//         palindrome = getSubString(s,left, right)
//       }
//       left--;
//       right++
//     }

//     return [palindrome, maxLen]
// }
