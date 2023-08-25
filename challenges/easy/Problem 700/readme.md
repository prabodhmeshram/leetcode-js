## Problem

https://leetcode.com/problems/search-in-a-binary-search-tree

## Approach to solve the problem

The solution to this problem requires recursion

The base case is when we reach the value or we reach the end of the tree
and no value is found we return the node

We check if the root is not null, we proceed

We check if root.val is equal to target, we return root

In case the value is not matched, we go deeper in the root child nodes

We check if target Val is greater than or less than the currentNode val

If it is found to be greater, we know our value will lie in the right side
if the target is lower we know our value will lie on the left side.

We call the searchBST method with the appropriate child node left or right
and perform same things till we found the match or we hit null

```
/**
 * https://leetcode.com/problems/search-in-a-binary-search-tree
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (root === null) return root;

  if (root.val === val) return root;

  if (root.val < val) return searchBST(root.right, val);
  if (root.val > val) return searchBST(root.left, val);
};

```
