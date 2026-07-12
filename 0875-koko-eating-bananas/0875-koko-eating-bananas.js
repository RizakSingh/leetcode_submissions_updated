/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
       let left = 1
    let right = 0
    let ans = 0 
    for(let i = 0 ; i <piles.length;i++){
        left = Math.min(left,piles[i])
        right = Math.max(right,piles[i])
    }
function time(mid){
    let sum = 0 
for(let i = 0 ;i<piles.length;i++){
    sum = sum +Math.ceil(piles[i] / mid)
}
return sum<=h
}
while(left<=right){
    let mid = Math.floor((left+right)/2)
    if(time(mid)){
        ans = mid
        right = mid -1
    }else{
        left = mid +1
    }
}
return ans 
};