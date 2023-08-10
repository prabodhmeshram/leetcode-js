/**
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // const strArr = s.split('')
  let parenthesisStack = [s.charAt(0)];

  // const length = s.length
  for (i = 1; i < s.length; i++) {
    // const currChar = strArr[i]
    const currChar = s.charAt(i);
    // Check if any of the closing tag is encountered
    // if yes then perform operations on it
    // else push the currChar on top of parenthesisStack
    const topChar = parenthesisStack[parenthesisStack.length - 1];
    if (currChar === ")") {
      // check if it matches with top of parenthesisStack
      if (topChar !== "(") {
        return false;
      }
      parenthesisStack.pop();
    } else if (currChar === "}") {
      if (topChar !== "{") {
        return false;
      }
      parenthesisStack.pop();
    } else if (currChar === "]") {
      if (topChar !== "[") {
        return false;
      }
      parenthesisStack.pop();
    } else {
      parenthesisStack.push(currChar);
    }
  }

  return !parenthesisStack.length;
};
