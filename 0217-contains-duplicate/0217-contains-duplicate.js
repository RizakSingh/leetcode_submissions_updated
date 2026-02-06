/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
 let seen = new Set()
 for(let i = 0 ;i<=nums.length-1;i++){
    if(seen.has(nums[i])){
        return true
    }else{
        seen.add(nums[i])
    }
 }
 return false
};
