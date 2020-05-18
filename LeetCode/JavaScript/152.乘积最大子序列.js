/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // 1.dp
  let prevMax = 1;
  let prevMin = 1;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      let element = prevMax;
      prevMax = prevMin;
      prevMin = element;
    }
    prevMax = Math.max(prevMax * nums[i], nums[i]);
    prevMin = Math.min(prevMin * nums[i], nums[i]);
    max = Math.max(max, prevMax);
  }
  return max;
};
// @lc code=end
