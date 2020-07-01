/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  /**
   * 动态规划
   */

  // 状态定义： pd[i][j] 为 A[i] 和 B[j] 最长公共前缀。
  let result = 0;
  let dp = Array.from(new Array(A.length + 1), () =>
    new Array(B.length + 1).fill(0)
  );
  console.log(dp);

  // 转移方程：
  // A [i] == B [j] 时：dp[i][j] = dp[i-1][j-1] + 1;
  // A [i] != B [j] 时：dp[i][j] = 0;

  for (let i = 1; i <= A.length; i++) {
    for (let j = 1; j <= B.length; j++) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        result = Math.max(result, dp[i][j]);
      }
    }
  }
  return result;
};
// @lc code=end
