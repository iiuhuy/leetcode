/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let strArr = s
    .replace(/[^0-9a-zA-Z]/g, "")
    .toLowerCase()
    .split("");
  return strArr.join("") == strArr.reverse().join("");
};
// @lc code=end
