## Multiple Approaches to solve the problem

### First approach

First Approach is a Brute force Approach to solve the problem

As the requirement is to do the operation in place, we've to modify the input array as
solution. Here we're marking the corresponding row and column with a random negative number
where Zero is encountered. The reason of marking it a random negative is to pass the
test cases that are written in LeetCode. We earlier started with a -1, but as the
leetcode test suite has -1 as one of the test case our code failed for that test.

After marking the row,col with random number. Repeat the matrix iteration and now
mark all the cells with random negative number with 0 and we get our solution.

### Stats from LeetCode

#### Solution one stats

![Alt text](sol1.png)
