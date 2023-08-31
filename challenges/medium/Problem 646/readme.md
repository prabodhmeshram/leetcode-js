## Multiple ways to solve the problem

### Use Dynamic Programming

For computing the max chain, first we sort the array in ascending order.

Next iterate over each pair of element and check the next succeeding neighbors.

We need a method getLengthForTargetIndex, which gives us back the length of max chain for current
index elements. This function is recursive and checks if there is chain formation in next elements
and cache the length at the index of element

We need to just return the first index chain as that represents the max length possible, as it is always going
to

```
/**
 * @param {number[][]} pairs
 * @return {number}
 */

var findLongestChain = function(pairs) {
    let memo = []
    pairs.sort((a,b)=>{
      return a[1] - b[1]
    })

    return getLengthForTargetIndex(0, pairs, memo)
};

var getLengthForTargetIndex = function(targetIndex, pairs, memo){

  if(targetIndex === pairs.length - 1) {
    memo[targetIndex] = 1
    return memo[targetIndex]
  }

  memo[targetIndex] = 1
  for(let i = targetIndex+1; i < pairs.length; i++){
    if(pairs[targetIndex][1] < pairs[i][0]){
      if(memo[i]){
        memo[targetIndex] += memo[i]
      }else{
        memo[targetIndex] += getLengthForTargetIndex(i, pairs, memo)
      }
      break;
    }
  }
  return memo[targetIndex];
}

```
