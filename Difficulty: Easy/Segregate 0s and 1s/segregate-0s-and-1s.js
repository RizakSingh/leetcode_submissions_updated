// User function Template for javascript

/**
 * @param {number[]} arr

*/

class Solution {

    segregate0and1(arr) {
        let i = 0 
        let j = arr.length-1
        let k = 0
        while(k<=j){
            if(arr[k]===0){
                let temp = arr[i]
                arr[i] = arr[k]
                arr[k]= temp
                k++
                i++
            }
            else if(arr[k]===1){
                let temp = arr[j]
                arr[j] = arr[k]
                arr[k]= temp
                j--
            }else{
                k++
            }
        }
   return arr }
}