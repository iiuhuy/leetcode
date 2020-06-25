/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // dp[i]表示0-i之间的字符串是否可以被拆分并满足题设条件存在于wordDict中
  let dp = new Array(s.length).fill(false);
  let setValue = new Set(wordDict);
  for (let i = 0; i < s.length; i++) {
    // 检查0-i之间的字符串是否直接存在于wordDict中
    if (setValue.has(s.substring(0, i + 1))) {
      dp[i] = true;
      continue;
    }
    // 这一步是为了检查。假如s.substring(0,i)不直接存在于wordDict中
    // 那么判断拆分之后是否存在于wordDict中
    for (let j = 0; j < i; j++) {
      if (dp[j] && setValue.has(s.substring(j + 1, i + 1))) {
        dp[i] = true;
      }
    }
  }
  return dp[s.length - 1];
};
// @lc code=end
