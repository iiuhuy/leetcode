/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  /**
   * 动态规划
   */
  // 定义状态： dp[i][j]: s 的前 i 个字符是否与 p 的前 j 个字符是否匹配。
  // 状态方程：
  //     当 s[i] == p[j] 或者 p[j] == '?' 时，dp[i][j] = dp[i-1][j-1]
  //     当 s[i] != p[j] && p[j] == '*' 时， dp[i-1][j] || dp[i][j-1]

  // 初始化: dp[0][0] 两个空字符串，为 true
  let n = s.length;
  let m = p.length;
  let dp = Array.from(new Array(n + 1), () => new Array(m + 1).fill(false));
  dp[0][0] = true;
  for (let j = 1; j <= m; j++) {
    if (p[j - 1] == "*") {
      dp[0][j] = dp[0][j - 1];
    }
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s[i - 1] == p[j - 1] || p[j - 1] == "?") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] == "*") {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      }
    }
  }
  return dp[n][m];
};
// @lc code=end
