/**
 * @param {number[]} arr
 */
class Solution {
    segregate0and1(arr) {
        // code here
           let i = 0 
           let j = arr.length-1
           while(i<j){
               if(arr[i]==0){
                   i++
               }else if(arr[j]==1){
                   j--
               }else{
                   let temp = arr[i]
                   arr[i]=arr[j]
                   arr[j]=temp
                   i++
                   j--
               }
           }
           return arr
    }
}