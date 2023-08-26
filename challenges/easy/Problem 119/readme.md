## Recursive solution

In this approach we solve the problem recursively by accessing the
previous row values for the current row index. In case we have
the elements of previous row we return it to compute the current row
elements. Else we compute the previous row by calling the getRow on its
previous row

The base case here is the top most row is always 1
Also another thing to note here is, the edge nodes of each row will
always be 1 so we also take care of these condition as we proceed for
the solution

The currentRow element is computed as summation of previous rows adjacent
values above current element, which are basically current element index - 1 and
index.

```
currElement[i] = previousRow[i-1] + previousRow[i]
```

Where i is the current element index in the result row

```
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1]

    let result = []
    for(let i=0; i<= rowIndex; i++){
        if(i === 0 || i === rowIndex ) result.push(1)
        else{
            let preRow = getRow(rowIndex-1)
            result.push(preRow[i-1] + preRow[i])
        }
    }
    return result
};

```

## Recursive + DP solution

In previous solution there was a problem as for calculating currenRow element,
we needed to refer multiple times the previous rows and their previous and so on.

We were kind of doing the same computation multiple times.

The solution here is to cache the result of previous row in a hashmap
and refer the hashmap incase the previous row is present. If not we
only compute it once and store it for future access.
