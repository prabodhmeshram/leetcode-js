// https://leetcode.com/problems/reverse-linked-list-ii/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    let currentNode = head;
    let currentPosition = 1;
    let startTailNode = null;

    if(!head.next) return head;
    
    while(currentPosition < left){
        startTailNode = currentNode;
        currentNode = currentNode.next;
        currentPosition++;
    }
    
    let midHead = null;
    let lastEle = currentNode;
    while(currentPosition <= right){
        let temp = currentNode;
        currentNode = currentNode.next;
        temp.next = midHead;
        midHead = temp;
        currentPosition++
    }
    
    if(startTailNode){
        startTailNode.next = midHead;
    }else{
        head = midHead;
    }
    
    if(currentNode){
        lastEle.next = currentNode;
    }
    
    return head;
};