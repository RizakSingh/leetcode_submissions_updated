/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
maxwater = 0 
left = 0 
right = height.length-1

while(left<right){
    let area = Math.min(height[left],height[right])*(right-left)
    maxwater = Math.max(maxwater,area)
   if(height[left]<height[right]){
    left++
   }else{
    right--
   }
}
return maxwater

};