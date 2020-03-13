/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = new Map();
  // 妙啊
  const half = nums.length >> 1;
  for (const n of nums) {
    const count = (map.get(n) || 0) + 1;
    if (count > half) {
      return n;
    }
    map.set(n, count);
  }
  return null;
};
// @lc code=end
