/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = [];
  function walk(str, l, r) {
    if (l >= n && r >= n) {
      result.push(str);
      return;
    }
    if (l <= r) {
      walk(str + "(", l + 1, r);
    } else {
      if (l < n) {
        walk(str + "(", l + 1, r);
      }
      if (r < n) {
        walk(str + ")", l, r + 1);
      }
    }
  }
  walk("", 0, 0);
  return result;
};
generateParenthesis(3);
// @lc code=end
