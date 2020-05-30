/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  // 暴力解
  let result = 0;
  for (let i = 0; i < heights.length; i++) {
    let max = heights[i],
      min = heights[i];
    for (let j = i + 1; j < heights.length; j++) {
      min = Math.min(min, heights[j]);
      max = Math.max(max, min * (j - i + 1));
    }
    result = Math.max(result, max);
  }
  return result;
  // 2.dp
};
// @lc code=end
