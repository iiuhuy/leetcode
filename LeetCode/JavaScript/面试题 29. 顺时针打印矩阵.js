/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length == 0) return [];
  let i = 0,
    j = 0;
  let dictionary = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]; // 移动的方向为 右、下、左、上循环
  let move = 0; //当前移动方向
  let result = [];
  while (
    i < matrix.length &&
    i >= 0 &&
    j < matrix[0].length &&
    j >= 0 &&
    matrix[i][j] !== true
  ) {
    result.push(matrix[i][j]);
    matrix[i][j] = true; //标记遍历过的位置为true
    let nexti = i + dictionary[move][0]; //下一步的位置
    let nextj = j + dictionary[move][1];

    //判断是否变向
    if (
      nexti >= matrix.length ||
      nexti < 0 ||
      nextj >= matrix[0].length ||
      nextj < 0 ||
      matrix[nexti][nextj] === true
    ) {
      move = move == 3 ? 0 : move + 1;
    }

    i = i + dictionary[move][0];
    j = j + dictionary[move][1];
  }
  return result;
};
