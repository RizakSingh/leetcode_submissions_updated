/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
    let num = n*2
    let evensum= 0 
    let oddsum = 0 
    for(let i = 1 ; i <= num; i++){
        if(i%2==0){
            evensum = evensum  + i 
        }else{
            oddsum = oddsum + i 
        }
    }
    for(let i = oddsum ; i>=1;i--){
        if(evensum%i==0 && oddsum%i==0){
            return i 
        }
    }
return 1 
};