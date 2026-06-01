var setZeroes = function(matrix) {

    let row = [];
    let col = [];

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){

            if(matrix[i][j] === 0){
                row.push(i);
                col.push(j);
            }

        }
    }

    for(let k = 0; k < row.length; k++){
        let r = row[k];

        for(let j = 0; j < matrix[0].length; j++){
            matrix[r][j] = 0;
        }
    }

    for(let k = 0; k < col.length; k++){
        let c = col[k];

        for(let i = 0; i < matrix.length; i++){
            matrix[i][c] = 0;
        }
    }
};