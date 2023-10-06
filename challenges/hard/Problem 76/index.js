/**
 * https://leetcode.com/problems/minimum-window-substring/
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let tCharHash = new Map();
  let currentWindowCharHash = new Map();
  let minStringLength = Infinity;
  let result = "";
  for (let i = 0; i < t.length; i++) {
    if (!tCharHash.get(t[i])) {
      // tCharHash[t[i]] = 0
      tCharHash.set(t[i], 0);
    }
    tCharHash.set(t[i], tCharHash.get(t[i]) + 1);
  }

  let wStart = 0;

  for (let i = 0; i < s.length; i++) {
    // if(!currentWindowCharHash.hasOwnProperty(s[i])){
    if (!currentWindowCharHash.get(s[i])) {
      // currentWindowCharHash[s[i]] = 0
      currentWindowCharHash.set(s[i], 0);
    }

    // currentWindowCharHash[s[i]]++;
    currentWindowCharHash.set(s[i], currentWindowCharHash.get(s[i]) + 1);

    if (
      wStart + i + 1 >= t.length &&
      hasAllChars(tCharHash, currentWindowCharHash)
    ) {
      for (let j = wStart; j < s.length; j++) {
        // currentWindowCharHash[s[j]]--
        currentWindowCharHash.set(s[j], currentWindowCharHash.get(s[j]) - 1);
        if (!hasAllChars(tCharHash, currentWindowCharHash)) {
          const currentStr = getMinString(s, j, i);
          if (minStringLength > currentStr.length) {
            minStringLength = currentStr.length;
            result = currentStr;
          }
          wStart = j + 1;
          break;
        }
      }
    }
  }
  return result;
};

const hasAllChars = (ref, target) => {
  let hasChars = true;
  ref.forEach((value, key) => {
    hasChars = hasChars && target.get(key) && target.get(key) >= value;
  });
  return hasChars;
};

const getMinString = (str, startIndex, endIndex) => {
  return str.slice(startIndex, endIndex + 1);
};
