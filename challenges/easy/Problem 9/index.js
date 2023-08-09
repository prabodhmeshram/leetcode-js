/**
 * https://leetcode.com/problems/palindrome-number
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let result = 0;
  let number = x;

  while (number > 0) {
    result = result * 10 + (number % 10);
    // Removing the rightmost digit from the number
    number = Math.floor(number / 10);
  }
  return result === x;
};
