/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  x = x.toString();

  let result = x.length - 1;
  for (let i = 0; i < x.length; i++) {
    if (x[i] != x[result]) {
      return false;
    }
    result--;
  }
  return true;
};
// @lc code=end
