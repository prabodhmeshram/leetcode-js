/**
 * https://leetcode.com/problems/palindrome-number
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // if a negative number, no need to
  // check, its already not a palindrome
  if (x < 0) return false;

  let result = 0;
  let number = x;
  let rightmost;

  while (number > 0) {
    // Getting the rightmost digit
    rightmost = number % 10;

    result = result * 10 + rightmost;

    // Removing the rightmost digit from the number
    number = Math.floor(number / 10);
  }
  return result === x;
};
