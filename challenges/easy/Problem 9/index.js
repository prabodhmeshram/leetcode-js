/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let strNum = "" + x + "";
  return strNum === strNum.split("").reverse().join("");
};
