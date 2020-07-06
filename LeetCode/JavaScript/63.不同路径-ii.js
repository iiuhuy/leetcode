/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (!obstacleGrid.length) return 0;
  if (obstacleGrid[0][0] === 1) return 0;
  const row = obstacleGrid.length;
  const col = obstacleGrid[0].length;

  const dp = Array.apply(null, { length: row + 1 }).map(() =>
    Array.apply(null, { length: col + 1 }).map(() => 0)
  );
  dp[1][1] = 1;
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      if (obstacleGrid[i - 1][j - 1] === 1 || (i === 1 && j === 1)) continue;
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  // console.log(dp)
  return dp[row][col];
};
// @lc code=end
