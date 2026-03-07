/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack = []
let arr = new Array(nums.length)
let i = nums.length-1
while(i>=0){
    stack.push(nums[i])
    i--
}
for(let j = nums.length-1;j>=0;j--){
    while(stack.length>0 && stack[stack.length-1]<=nums[j]){
        stack.pop()
    }
    if(stack.length==0){
arr[j]=-1
    }else{
        arr[j]= stack[stack.length-1]
    }
    stack.push(nums[j])
}
return arr
};