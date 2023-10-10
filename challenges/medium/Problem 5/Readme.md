## Longest Palindromic Substring

The intuition is to find the palindrome substring, via iterating the string
and considering the current character as center of palindrome
Moving left and right to check if the characters match
This works for a odd palindrome
For even palindrome we make right pointer to start from the character
next to the current char and do the same logic

```
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

  let maxLen = 0;
  let palindrome = ''

  for(let i=0; i < s.length; i++){

    // for odd palindrome
    let left = i
    let right = i

    while(left >= 0 && right < s.length && s[left] === s[right]){
      if( (right -left + 1) > maxLen){
        maxLen = right -left + 1
        palindrome = getSubString(s,left, right)
      }
      left--;
      right++
    }

    //  For even case
    left = i
    right = i+1
    while(left >= 0 && right < s.length && s[left] === s[right]){
      if( (right -left + 1) > maxLen){
        maxLen = right -left + 1
        palindrome = getSubString(s,left, right)
      }
      left--;
      right++
    }
  }
  return palindrome
}

const getSubString = (s, left, right) => {
  return s.substring(left, right+1)
}

```
