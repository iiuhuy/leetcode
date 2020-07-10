/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let n = prices.length;
  if (n == 0) {
    return 0;
  }
  let dp = Array.from(new Array(n), () => new Array(2));
  for (var i = 0; i < n; i++) {
    if (i == 0) {
      dp[0][0] = 0;
      dp[0][1] = -prices[i];
      continue;
    } else if (i == 1) {
      dp[1][0] = Math.max(dp[0][0], dp[0][1] + prices[i]);
      dp[1][1] = Math.max(dp[0][1], -prices[i]);
      continue;
    }
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
  }
  return dp[n - 1][0];
};
// @lc code=end
