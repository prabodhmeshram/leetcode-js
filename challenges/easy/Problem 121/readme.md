# Buy and Sell Stock

### Using Sliding window method

The intuition is to have two pointer buy and sell
Start buy with 0 and sell with 1. We slide the sell window and check if
buy is lower than sell, if it is then we store the current window profit.
And move the window to right and check if there are more higher values of sell
than buy we keep updating the profit. In case there is a condition where buy is
greater than sell then we set buy ptr to sell and increment sell to next element,
and continue the process to get the max profit.

```

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let maxProfit = 0;

    if(prices.length < 2) return maxProfit

    let buy = 0
    let sell = 1

    while(sell < prices.length){

        if(prices[buy] >= prices[sell]){
            buy = sell;
            sell++
        }else{
            const currProfit = prices[sell] - prices[buy]
            maxProfit = Math.max(maxProfit, currProfit)
            sell++
        }
    }
    return maxProfit
}

```
