/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    // Plan 1:

    // Create output array
    // Create column max array that stores the max value of a column and the row index in a sub array
    // Create a row max array that stores the max value of a row
    // Iterate through the matrix and update the max arrays
    // Iterate through column max array and check if the row max array has the same value using the row index in the sub array
    // If a value matches add it to the output array
    // Return output array at the end
    // Estimated run time O(m*n)
    // Estimated space complexity O(m+n)

    let output = [];
    let colMax = [];
    let rowMax = [];
    let width = matrix[0].length;
    let height = matrix.length;
    for (let row = 0; row < height; row++) 
    {
        for (let col = 0; col < width; col++) 
        {
            if (row === 0) 
            {
                colMax.push([matrix[row][col], row]);
            }
            else if (matrix[row][col] > colMax[col][0]) 
            {
                colMax[col] = [matrix[row][col], row];
            }
            if (col === 0) 
            {
                rowMax.push(matrix[row][col]);
            }
            else if (matrix[row][col] < rowMax[row]) 
            {
                rowMax[row] = matrix[row][col];
            }
        }
    }
    for (let i = 0; i < colMax.length; i++) 
    {
        let val = colMax[i][0];
        let row = colMax[i][1];
        if (val === rowMax[row]) output.push(val);
    }
    return output;
};