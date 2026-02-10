/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
let left = 0
let result = []
let right = nums.length-1
let index = nums.length-1
 while(left<=right){
    let maxleft = nums[left]*nums[left]
    let maxright = nums[right]*nums[right]

    if(maxleft>maxright){
        result[index]=maxleft
      
        left++
    }else{
        result[index]= maxright
      
    right--
    }
    index--
 }
 return result 
};