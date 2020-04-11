/*
 * @lc app=leetcode.cn id=887 lang=javascript
 *
 * [887] 鸡蛋掉落
 */

// @lc code=start
/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
  let dp = Array(K + 1).fill(0);
  let result = 0;
  while (dp[K] < N) {
    result++;
    for (let i = K; i > 0; i--) {
      dp[i] = dp[i - 1] + dp[i] + 1;
    }
  }
  return result;
};
// @lc code=end
