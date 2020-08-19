/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let m = s.length;
  let result = 0;
  for (let i = 0; i < 2 * m - 1; i++) {
    // i 的范围
    let l = i >>> 1,
      r = l + (i % 2); // 中心点的范围（可能为奇数或者偶数）
    while (l >= 0 && r < m && s[l] == s[r]) {
      // 限定起始下标和终止下标的范围
      l--;
      r++;
      result++;
    }
  }
  return result;
};
// @lc code=end
