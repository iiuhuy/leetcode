/*
 * @lc app=leetcode.cn id=808 lang=javascript
 *
 * [808] 分汤
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var soupServings = function(N) {
  const number = parseInt(str.trim(), 10); // 转成 10 进制

  if (isNaN(number)) {
      return 0;
  } else if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
      return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
  } else {
      return number;
  }
};
// @lc code=end

