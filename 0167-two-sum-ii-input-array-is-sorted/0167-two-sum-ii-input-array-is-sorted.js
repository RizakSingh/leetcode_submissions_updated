/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let map = new Map()
let answer = 0
    for(let i =0 ;i <numbers.length;i++){
        let ans = target -numbers[i]
        if(map.has(ans)){
return [map.get(ans)+1,i+1]
        }
        map.set(numbers[i],i)
    }
};