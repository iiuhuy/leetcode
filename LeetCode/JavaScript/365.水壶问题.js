/*
 * @lc app=leetcode.cn id=365 lang=javascript
 *
 * [365] 水壶问题
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
// 题解:　https://leetcode-cn.com/problems/water-and-jug-problem/solution/bfszui-da-gong-yue-shu-by-fe-lucifer/
var canMeasureWater = function(x, y, z) {
  if (x + y < z) {
    return false;
  } else if (x === 0 || y === 0) {
    return z === 0 || x + y === z;
  } else {
    function GCD(a, b) {
      while (a !== b) {
        const t = Math.abs(a - b);
        a = Math.min(a, b);
        b = t;
      }
      return a;
    }
    return z % GCD(x, y) === 0;
  }
};
// @lc code=end
