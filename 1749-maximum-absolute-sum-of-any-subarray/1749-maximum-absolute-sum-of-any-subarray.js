/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let max = nums[0]
    let min =  nums[0]
    let ans = Math.abs(nums[0])
    for (let i = 1 ;i <=nums.length-1;i++){
        max = Math.max(nums[i],max+nums[i])
        min = Math.min(nums[i],min+nums[i])
        ans = Math.max(ans,Math.abs(min),Math.abs(max))
    }
    return ans 
};