/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let hasNext = l1.val !== undefined || l2.next !== undefined;

  let carry = 0;
  let sumArr = [];
  while (hasNext) {
    let sum = carry;
    if (l1 && l1.val !== undefined) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 && l2.val !== undefined) {
      sum += l2.val;
      l2 = l2.next;
    }

    if (sum > 9) {
      sumArr.push(sum % 10);
      carry = 1;
    } else {
      sumArr.push(sum);
      carry = 0;
    }

    hasNext = (l1 && l1.val !== undefined) || (l2 && l2.val !== undefined);
    if (!hasNext && carry) {
      sumArr.push(carry);
    }
  }

  let resultNode = null;
  let lastNode = null;
  for (let i = 0; i < sumArr.length; i++) {
    if (i === 0) {
      resultNode = new ListNode(sumArr[i], null);
      lastNode = resultNode;
    } else {
      const node = new ListNode(sumArr[i], null);
      lastNode.next = node;
      lastNode = lastNode.next;
    }
  }

  return resultNode;
};
