/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const list = new Set([
    1,
    7,
    10,
    13,
    19,
    23,
    28,
    31,
    32,
    44,
    49,
    68,
    70,
    79,
    82,
    86,
    91,
    94,
    97
  ]);
  // 注意边界处理
  while (n >= 100) {
    let sum = 0;
    while (n) {
      const value = n % 10;
      sum += value * value;
      n = parseInt(n / 10);
    }
    n = sum;
  }
  return list.has(n);
  
  // 2.
  let set = new Set(),
    sum;
  n += "";
  while (sum !== 1) {
    sum = 0;
    for (let i = 0; i < n.length; i++) {
      sum += n[i] * n[i];
    }
    n = sum + "";
    if (set.has(sum)) return false;
    set.add(sum);
  }
  return true;
};
// @lc code=end
