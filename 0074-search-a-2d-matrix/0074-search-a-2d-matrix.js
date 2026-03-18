/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(let i = 0 ;i<=matrix.length-1;i++){
        for(let j =0;j<=matrix[0].length-1;j++){
            if(matrix[i][j]==target){
                return true
            }
        }
    }
    return false
};