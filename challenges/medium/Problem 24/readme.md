## Solved using recursion

We swap the alternate linkedList values and then we call the swapPair method again
with the head.next.next -> which again swaps the values in the next pairs
until we reach the node whose head or next is null, and we cannot swap more

```
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {

    if(head === null || head.next === null) return head

    let temp = head.val
    head.val = head.next.val
    head.next.val = temp
    swapPairs(head.next.next)

    return head
};

```
