/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 暴力枚举 -> 超时了
  // let result = "";
  // let max = 0;
  // for (let i = 0; i < s.length; i++) {
  //   for (let j = i + 1; j <= s.length; j++) {
  //     let tmpStr = s.substring(i, j);
  //     if (expandPalindrome(tmpStr) && tmpStr.length > max) {
  //       result = s.substring(i, j);
  //       max = tmpStr.length;
  //     }
  //   }
  // }
  // return result;
  // function expandPalindrome(str) {
  //   var len = str.length;
  //   var middle = parseInt(len / 2);
  //   for (var i = 0; i < middle; i++) {
  //     if (str[i] != str[len - i - 1]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  // dp
  let n = s.length;
  let result = "";
  let dp = Array.from(new Array(n), () => new Array(n).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i + 1 > result.length) {
        result = s.substring(i, j + 1);
      }
    }
  }
  return result;
};

// @lc code=end
