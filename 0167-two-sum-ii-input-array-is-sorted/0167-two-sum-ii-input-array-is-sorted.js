/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0
    let j = numbers.length-1
    let sum = 0 
for(let r = 0 ; r<=numbers.length-1;r++){
sum = numbers[i]+numbers[j]
if(sum===target){
    return [i+1,j+1]
}else if(sum>target){
j--
}else if(sum<target){
 i++
}
    }
};