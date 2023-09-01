## Problem

https://leetcode.com/problems/frog-jump

## Solution DP + Recursion

Solved the problem using recursion and DP to check if the frog can jump till last stone.

The intuition behind the solution is to branch out the steps at each stone for k-1, k and k+1 outcomes.
Using the DFS strategy go deep inside each node till we reach the final stone or not able to proceed.
In this process store the state of stone and step taken to reach it in a hash, this is to avoid
the same calculation when using the DFS to proceed.

> NOTE: Although the solution posted in the `index.js` seems to be working for the test case outside
> leetcode, the similar solution in C++ seems to be working fine. Keeping the code as it is for now
> and will circle back in case I am missing something.

The problem happening with test case `[0,1,2,3,4,8,9,11]`, but when same code ran outside the leetcode
with same test case, it is passing. Evening debugging on leetcode seems to be returning appropirate result
but the output is saying otherwise, which seems like a bug in the leetcode compiler
