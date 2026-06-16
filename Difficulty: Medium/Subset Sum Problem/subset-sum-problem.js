/**
 * @param {number[]} arr
 * @param {number} target
 * @return {boolean}
 */

class Solution {
    isSubsetSum(arr, sum) {
        // code here
     const dp = new Array(sum + 1).fill(false);
        dp[0] = true;

        for (const num of arr) {
            for (let s = sum; s >= num; s--) {
                dp[s] = dp[s] || dp[s - num];
            }
        }

        return dp[sum];
    }
}