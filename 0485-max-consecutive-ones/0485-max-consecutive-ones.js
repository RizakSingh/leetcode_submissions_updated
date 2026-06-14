/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0 
    let ans = 0 
    for (let i = 0 ;i <nums.length;i++){
        if(nums[i]==1){
            count++
        }  
        ans = Math.max(ans,count)
      if(nums[i]!==1){
        count = 0
      }
    }
    return ans
};