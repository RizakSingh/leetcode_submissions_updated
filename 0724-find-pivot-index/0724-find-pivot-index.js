/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let left = 0 
    let right = nums.length-1
    let sum = 0 
    for(let j = 0 ;j<=nums.length-1;j++){
        sum = sum + nums[j]
    }
    for(let i = 0 ;i <=nums.length-1;i++){
      
        right =  sum - left - nums[i]

        if(left === right ){
            return i
        }
          left = left + nums[i]
    }
    return -1
};