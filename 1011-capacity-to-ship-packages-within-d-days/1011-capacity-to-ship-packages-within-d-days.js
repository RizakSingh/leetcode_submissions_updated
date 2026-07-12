/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
        let left = 0 
    let right = 0 
    let ans = 0 
  for(let i = 0 ;i <weights.length;i++){
 left = Math.max(weights[i],left)
 right = right + weights[i]
  }
function minpackage(mid){
    let count = 1
    let sum = 0 
for(let i = 0 ;i<weights.length;i++){
    
    if(sum+weights[i]<=mid){
        sum = sum + weights[i]
    }else{
        count++
        sum = weights[i]
    }
}
return count<=days
}
while(left<=right){
    let mid = Math.floor((left+right)/2)
    if(minpackage(mid)){
        ans = mid
        right = mid-1
    }else{
        left = mid + 1
    }
}
return ans 
};