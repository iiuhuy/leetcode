/*
 * @lc app=leetcode.cn id=892 lang=javascript
 *
 * [892] 三维形体的表面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // result += grid[i][j] ? grid[i][j] * 4 + 2 : 0;
      // if (i !== 0) {
      //     result -= Math.min(grid[i - 1][j], grid[i][j]) * 2;
      // }
      // if (j !== 0) {
      //     result -= Math.min(grid[i][j - 1], grid[i][j]) * 2;
      // }
      const element = grid[i][j];
      result += element * 6;
      if (element) {
        result -= (element - 1) * 2;
      }
      if (i > 0) {
        result -= Math.min(element, grid[i - 1][j]) * 2;
      }
      if (j > 0) {
        result -= Math.min(element, grid[i][j - 1], element) * 2;
      }
    }
  }
  return result;
};
// @lc code=end
