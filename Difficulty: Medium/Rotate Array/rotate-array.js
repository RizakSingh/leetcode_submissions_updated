/**
 * @param {number[]} arr
 * @param {number} d
 */

class Solution {
    rotateArr(arr, d) {
            let left = 0 
            d = d%arr.length
    let right = arr.length-1
    let n= arr.length
 rotate(0,d-1,arr)
 rotate(d,n-1,arr)
 rotate(0,n-1,arr)
    
     function rotate(left,right,arr){
    while(left<right){
        let temp = arr[right]
        arr[right]=arr[left]
        arr[left] =temp
        left ++
        right--
     }
}
return arr

    }
}