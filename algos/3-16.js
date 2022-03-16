const squareMatrix1 = [
[1, 2, 3], //arr[0][0]. arr[0][2]
[4, 5, 6], //arr[1][1]. arr[1][1]
[9, 8, 9], //arr[]
];
const expected1 = 2;



//left to right diagonal: 1 + 5 + 9 = 15
//right to left diagonal: 3 + 5 + 9 = 17
//absolute difference = 2

const squareMatrix2 = [
[1, 2, 3, 4, 5], //arr[0][0]. arr[0][arr.length-1]
[1, 2, 3, 4, 5],
[1, 2, 3, 4, 5],
[1, 2, 3, 4, 5],
[1, 2, 3, 4, 5],
];
const expected2 = 0;
//left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
//right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
//absolute difference = 0


function diagonalDifference(sqrMatrix) {
//given a square matrix (2d array) of integers
// calculate the absolute difference between the sum of its diagonals

}