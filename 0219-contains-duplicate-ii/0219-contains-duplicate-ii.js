/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();  // value -> last index
    
    for (let i = 0; i < nums.length; i++) {
        
        if (map.has(nums[i])) {
            let prevIndex = map.get(nums[i]);
            
            if (Math.abs(i - prevIndex) <= k) {
                return true;
            }
        }
        
        // Update last seen index
        map.set(nums[i], i);
    }
    
    return false;
};