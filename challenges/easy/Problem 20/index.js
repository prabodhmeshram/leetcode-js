// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const strArr = s.split("");
  let parenthesisStack = [strArr[0]];

  for (i = 1; i < strArr.length; i++) {
    const currChar = strArr[i];
    // Check if any of the closing tag is encountered
    // if yes then perform operations on it
    // else push the currChar on top of parenthesiStack
    if (currChar === ")") {
      // check if it matches with top of parentheisStack
      const topChar = parenthesisStack[parenthesisStack.length - 1];
      if (topChar !== "(") {
        return false;
      }
      parenthesisStack.pop();
    } else if (currChar === "}") {
      const topChar = parenthesisStack[parenthesisStack.length - 1];
      if (topChar !== "{") {
        return false;
      }
      parenthesisStack.pop();
    } else if (currChar === "]") {
      const topChar = parenthesisStack[parenthesisStack.length - 1];
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
