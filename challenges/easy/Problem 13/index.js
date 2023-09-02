/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let num = romanHash[s[0]];
  let lastNum = romanHash[s[0]];
  for (let i = 1; i < s.length; i++) {
    const currNum = romanHash[s[i]];
    if (currNum > lastNum) {
      num += currNum - lastNum * 2;
    } else {
      num += currNum;
    }
    lastNum = currNum;
  }
  return num;
};
