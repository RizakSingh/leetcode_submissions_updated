/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let set = new Set()
    let arr = []
    for(let i = 0 ;i<= nums.length-1;i++){
        if(set.has(nums[i])){
arr.push(nums[i])
        }else{
            set.add(nums[i])
        }
    }
    return arr
};