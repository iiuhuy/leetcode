/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let n = s.length;
  if (n < 2) {
    return s;
  }
  let isPalindrome = (left, right) => {
    while (left < right) {
      if (s[left++] != s[right--]) {
        return false;
      }
    }
    return true;
  };
  for (let i = 0; i < n; i++) {
    if (s[i] != s[n - i - 1]) {
      return isPalindrome(i + 1, n - i - 1) || isPalindrome(i, n - 1 - i - 1);
    }
  }
  return true;
};
// @lc code=end
