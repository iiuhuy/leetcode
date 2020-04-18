/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // 这个解法比较暴力， 效率比较低
  // 时间复杂度是 O(n^2)
  let result = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const currentArea = Math.abs(i - j) * Math.min(height[i], height[j]);
      if (currentArea > max) {
        result = currentArea;
      }
    }
  }
  return result;

  /**
   * 双指针
   */
};
// @lc code=end
