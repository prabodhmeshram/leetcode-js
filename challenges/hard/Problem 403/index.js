/**
 * https://leetcode.com/problems/frog-jump
 * @param {number[]} stones
 * @return {boolean}
 */

let hashMap = {};
let stonesExist = {};
var canCross = function (stones) {
  if (stones[0] !== 0 || stones[1] !== 1) return false;

  for (i = 0; i < stones.length; i++) {
    stonesExist[stones[i]] = true;
  }

  let hasJumped = proceedJump(stones[1], stones, 1);

  return hasJumped;
};

var proceedJump = function (currentStone, stones, prevJumpLen) {
  let backStone = currentStone + prevJumpLen - 1;
  let ableToReach = false;
  if (backStone === stones.at(-1)) return true;
  if (
    currentStone < backStone &&
    stonesExist[backStone] &&
    !hashMap[`${backStone}-${prevJumpLen - 1}`]
  ) {
    hashMap[`${backStone}-${prevJumpLen - 1}`] = true;
    ableToReach =
      ableToReach || proceedJump(backStone, stones, prevJumpLen - 1);
  }

  let sameJumpStone = currentStone + prevJumpLen;
  if (sameJumpStone === stones.at(-1)) return true;
  if (
    currentStone < sameJumpStone &&
    stonesExist[sameJumpStone] &&
    !hashMap[`${sameJumpStone}-${prevJumpLen}`]
  ) {
    hashMap[`${sameJumpStone}-${prevJumpLen}`] = true;
    ableToReach =
      ableToReach || proceedJump(sameJumpStone, stones, prevJumpLen);
  }

  let aheadStone = currentStone + prevJumpLen + 1;
  if (aheadStone === stones.at(-1)) return true;
  if (
    currentStone < aheadStone &&
    stonesExist[aheadStone] &&
    !hashMap[`${aheadStone}-${prevJumpLen + 1}`]
  ) {
    hashMap[`${aheadStone}-${prevJumpLen + 1}`] = true;
    ableToReach =
      ableToReach || proceedJump(aheadStone, stones, prevJumpLen + 1);
  }

  return ableToReach;
};
