/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
nums.sort((a, b) => a - b)
    let arr = []
    for(let i = 0 ; i <nums.length-2;i++){
           if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i +1
        let right = nums.length-1
        while(left<right){
            let ans = nums[i]+nums[left]+nums[right]
            if(ans ===0){
                arr.push([nums[i],nums[left],nums[right]])
            
            while(left<right && nums[left]==nums[left+1]){
                left++
            }
            while(left<right && nums[right]==nums[right-1]){
                right--
            }
            right--
            left++
        }else if(ans>0){
            right--
        }else{
            left++
        }
        }
        }
        return arr
    }
