/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */

class Solution {
    countFreq(arr, target) {
   function first(){let left = 0 
  let right = arr.length-1
  let ans = -1
  while(left<=right){
      let mid = Math.floor((left+right)/2)
      if(arr[mid]==target){
          ans = mid 
          right = mid-1
      }else if(arr[mid]<target){
          left = mid+1
      }else{
          right = mid -1
      }
  }
       return ans 
   }
   function last(){
        let left = 0 
  let right = arr.length-1
  let ans = -1
  
   while(left<=right){
      let mid = Math.floor((left+right)/2)
      if(arr[mid]==target){
          ans = mid 
          left= mid+1
      }else if(arr[mid]<target){
          left = mid+1
      }else{
          right = mid -1
      }
   }
       return ans 
   }

let fist = first()
let las = last()
if (fist == -1){
    return 0
}return las - fist+1
    }
}