/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  // 直接 sort 排序
  return nums.sort(function compare(a, b) {
    return a - b;
  });
};
// @lc code=end
