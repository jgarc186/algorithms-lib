function searchSortedMatrix(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;

    while (row <= matrix.length - 1 && col >= 0) {
        const possible = matrix[row][col];

        if (possible === target) {
            return [row, col]
        } else if (possible > target) {
            col -= 1;
        } else {
            row += 1;
        }
    }


    return [-1, -1];
}

const matrix = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]];

// expected cordinates [0, 4]
console.log(searchSortedMatrix(matrix, 5));
// expected cordinates [1, 3]
console.log(searchSortedMatrix(matrix, 9));
// expected cordinates [2, 2]
console.log(searchSortedMatrix(matrix, 13));
// expected cordinates [-1, -1]
console.log(searchSortedMatrix(matrix, 19));
