// User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {

    findMean(arr) {
let sum = 0 
        for (let i = 0 ;i<=arr.length-1;i++){
            sum = sum + arr[i]
        }
        return Math.floor(sum/arr.length)
    }
}