/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const number = parseInt(str.trim(), 10); // 转成 10 进制
  const flag = number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1;
  const result =
    number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;

  if (isNaN(number)) {
    return 0;
  } else if (flag) {
    return result;
  } else {
    return number;
  }

  // 自动机
};
// @lc code=end
