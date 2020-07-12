/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 * 题目求：骑士出发时所需要的最小稳妥血量，他走过一个点就会加上该点的权重 (有正有负)
 * 每次有两种选择：向右走，又会迎来两个选择；向下走，又会迎来两个选择
 * 很明显是一个递归树，可以用递归做：
 *    “嗨，dfs 函数，请您帮我算出：如果我走右边的点，我至少要带多少血量才稳妥”
 *    “嗨，dfs 函数，请您帮我算出：如果我走下边的点，我至少要带多少血量才稳妥”
 *    “我会依据你返回给我的值，算出：走到我当前的点，我至少要带的安全血量”
 * 可见，递归是自上而下地去思考问题的解决，「职责转交」给子调用，子问题的结果自下而上地返回，最后得到大问题的结果
 */
var calculateMinimumHP = function (dungeon) {
  const m = dungeon.length;
  const n = dungeon[0].length;
  // memo初始化，每一项都为0，代表还没记录
  const memo = new Array(m);
  for (let i = 0; i < m; i++) {
    memo[i] = new Array(n).fill(0);
  }
  const minSaveHP = (dungeon, i, j) => {
    if (i == m - 1 && j == n - 1) {
      // 递归的出口
      return dungeon[i][j] > 0 ? 1 : 1 - dungeon[i][j];
    }
    if (memo[i][j] > 0) return memo[i][j]; // 如果备忘录中有，就直接返回它
    let goDown = Infinity,
      goRight = Infinity;
    if (i < m - 1)
      // 走下方的点，需要带着的最小安全血量
      goDown = minSaveHP(dungeon, i + 1, j);
    if (j < n - 1)
      // 走右方的点，需要带着的最小安全血量
      goRight = minSaveHP(dungeon, i, j + 1);
    if (goDown < goRight) {
      if (goDown - dungeon[i][j] <= 0) {
        memo[i][j] = 1;
      } else {
        memo[i][j] = goDown - dungeon[i][j];
      }
    } else {
      if (goRight - dungeon[i][j] <= 0) {
        memo[i][j] = 1;
      } else {
        memo[i][j] = goRight - dungeon[i][j];
      }
    }
    return memo[i][j];
  };
  return minSaveHP(dungeon, 0, 0, memo);
};
// @lc code=end
