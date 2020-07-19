/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  // 看的题解。
  let len = nums.length;
  // 添加两侧的虚拟气球
  let points = [1, ...nums, 1];
  let dp = Array.from(Array(len + 2), () => Array(len + 2).fill(0));
  // 最后一行开始遍历,从下往上
  for (let i = len; i >= 0; i--) {
    // 从左往右
    for (let j = i + 1; j < len + 2; j++) {
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.max(
          dp[i][j],
          points[j] * points[k] * points[i] + dp[i][k] + dp[k][j]
        );
      }
    }
  }
  return dp[0][len + 1];
};
// @lc code=end
