/**
 * @param {number} sum
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
    countTriplets(sum, arr) {
        // code here
        arr.sort((a, b) => a - b);
        let count = 0 
        for(let i = 0 ;i <arr.length-2;i++){
            let left = i +1
            let right  = arr.length-1
            while(left<right){
                let total =arr[i] +arr[left]+arr[right]
               if(total<sum){
                   count = count+right-left
                   left++
               }else{
                   right--
               }
            }
        }
        return count 
    }
}