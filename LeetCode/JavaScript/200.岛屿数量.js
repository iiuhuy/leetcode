/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  // 记录岛屿数
  let num = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      // 是水：跳出一个迭代
      if (grid[i][j] == 0) continue;
      // 是岛：岛数加1，深度搜索将整块岛置0
      num++;
      dfs(grid, i, j);
    }
  }

  function dfs(grid, i, j) {
    grid[i][j] = 0;
    // 上
    if (i > 0 && grid[i - 1][j] != 0) {
      grid[i - 1][j] = 0;
      dfs(grid, i - 1, j);
    }
    // 下
    if (j > 0 && grid[i][j - 1] != 0) {
      grid[i][j - 1] = 0;
      dfs(grid, i, j - 1);
    }
    // 左
    if (i < grid.length - 1 && grid[i + 1][j] != 0) {
      grid[i + 1][j] = 0;
      dfs(grid, i + 1, j);
    }
    // 右
    if (j < grid[0].length - 1 && grid[i][j + 1] != 0) {
      grid[i][j + 1] = 0;
      dfs(grid, i, j + 1);
    }
  }

  return num;
};
const arr1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
];
const arr2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
];
console.log(numIslands(arr1));
console.log(numIslands(arr2));

// @lc code=end
