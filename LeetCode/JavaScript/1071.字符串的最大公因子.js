/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  const len = gcd(str1.length, str2.length);

  let result = "";

  for (let i = 0; i < len; i++) {
    result += str1[i];
  }

  return result;
};
// @lc code=end
