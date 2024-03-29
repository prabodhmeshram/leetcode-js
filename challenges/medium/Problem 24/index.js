/**
 * https://leetcode.com/problems/swap-nodes-in-pairs
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head === null || head.next === null) return head;

  let temp = head.val;
  head.val = head.next.val;
  head.next.val = temp;
  swapPairs(head.next.next);

  return head;
};
