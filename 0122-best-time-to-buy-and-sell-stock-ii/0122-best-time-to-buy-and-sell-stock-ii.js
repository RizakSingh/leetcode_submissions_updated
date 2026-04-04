/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxprofit = 0 
    let min = prices[0]
    for (let i = 0 ; i <=prices.length-1;i++){
     if(prices[i+1]>prices[i]){
     let profit = prices[i+1]-prices[i]
     maxprofit = maxprofit +profit
     }
    }
    return maxprofit 
};