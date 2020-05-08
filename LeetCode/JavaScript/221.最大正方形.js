/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (matrix.length === 0) return 0;

  // const dp = [];
  // const rows = matrix.length;
  // const cols = matrix[0].length;
  // let result = Number.MIN_VALUE;

  // for (let i = 0; i < matrix.length; i++) {
  //   dp[i] = [];
  //   if (i === 0) {
  //     dp[i] = Array(cols + 1).fill(0);
  //   } else {
  //     dp[i] = [0];
  //   }
  // }

  // for (let i = 1; i < rows + 1; i++) {
  //   for (let j = 1; j < cols + 1; j++) {
  //     if (matrix[i - 1][j - 1] === "1") {
  //       dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
  //       result = Math.max(result, dp[i][j]);
  //     } else {
  //       dp[i][j] = 0;
  //     }
  //   }
  // }

  const dp = [];
  let result = 0;

  for (let i = 0; i < matrix.length; i++) {
    dp[i] = [];
    for (let j = 0; j < matrix[0].length; j++) {
      dp[i][j] = +matrix[i][j];
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (!(i === 0 || j === 0 || dp[i][j] === 0)) {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      }
      result = Math.max(result, dp[i][j]);
    }
  }

  return result ** 2;
};
// @lc code=end
