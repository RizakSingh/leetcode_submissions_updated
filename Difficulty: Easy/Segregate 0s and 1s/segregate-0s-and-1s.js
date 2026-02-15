// User function Template for javascript

/**
 * @param {number[]} arr

*/
// User function Template for javascript

/**
 * @param {number[]} arr

*/

class Solution {

    segregate0and1(arr) {
        let i = 0
let j =arr.length-1
while (i<j){
    if(arr[i]==0){
       i++
    }else if(arr[j]==1){
        j--
    }else{
        let temp = arr[j]
        arr[j]=arr[i]
        arr[i]=temp
    }
}}}