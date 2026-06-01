/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let piv = -1
    for(let i = nums.length-2;i>=0;i--){
if(nums[i]<nums[i+1]){
    piv = i 
    break;
}  }
    if(piv==-1){
    nums.sort((a, b) => a - b);
    return nums 
}
for(let i = nums.length-1;i>piv;i--){
if(nums[piv]<nums[i]){
    let temp = nums[piv]
    nums[piv]= nums[i]
    nums[i]= temp 
   break
}
}
let i = piv+1
let j = nums.length-1
while(i<j){
    let temp = nums[i]
    nums[i]=nums[j]
    nums[j]= temp 
     i++
    j--
}
return nums
};