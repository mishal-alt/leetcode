/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {

    let rows = matrix.length
    let cols = matrix[0].length

    let result = []

    for (let j = 0; j < cols; j++) {
        result[j] = []

        for (let i = 0; i < rows; i++) {
            result[j][i] = matrix[i][j]
        }
    }

    return result
};
