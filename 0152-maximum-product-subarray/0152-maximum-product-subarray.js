/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let mini = nums[0]
    let max = nums[0]
    let ans = nums[0]
    for (let i = 1 ;i <=nums.length-1;i++){
let v1 = nums[i]
let v2 = mini*nums[i]
let v3 = max*nums[i]
max = Math.max(v1,Math.max(v2,v3))
mini = Math.min(v1,Math.min(v2,v3))
ans= Math.max(ans,Math.max(max,mini))
    }
return ans
};