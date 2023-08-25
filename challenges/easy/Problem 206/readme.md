## First Approach

We go iteratively in the first approach

We first check if the head or head of next are not null, in case case they are nothing needs
to be done and we simply return the head

Here we need to store nodes into previousNode, currentNode and nextNode buckets to able to
solve the problem iteratively

As we start with the first node which is head in our case, we need to set its next as null
as in resulting reverse operation first Node will become last and point to null

So we start with previousNode set to null and we point currentNode to head

We perform operations on currentNode in the while loop

We check if currentNode is not null, in case we reached the end of the loop. We iteratively point currentNode
to the next node so that we move ahead in the linkedlist and keep reversing the list step by step

We first store the next of currentNode into nextNode so that when we replace the currentNode to previous,
we do not lose the chain to proceed further. After we set currentNode.next -> previousNode, we make
previousNode point to currentNode as we need to move ahead in the list and similarly point the
currentNode to the nextNode

This is done iteratively until we reach the end and after the loop, we point the head to previousNode which
is the last non empty node.

```
/**
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
var reverseList = function(head) {

    if(head === null || head.next === null ) return head
    let previousNode = null
    let currentNode = head

    while(currentNode !== null){
        let nextNode = currentNode.next
        currentNode.next = previousNode
        previousNode = currentNode
        currentNode = nextNode
    }

    head = previousNode

    return head
};

```
