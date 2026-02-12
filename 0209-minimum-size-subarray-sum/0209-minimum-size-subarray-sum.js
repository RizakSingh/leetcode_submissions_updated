/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0 
    let left = 0
    let size = Infinity 
    for (let right= 0 ;right <=nums.length-1;right++){
sum = sum +nums[right]
while(sum>=target){
size = Math.min(size,right - left +1)
sum = sum - nums[left]
left++
}
    }
return size === Infinity? 0:size
};