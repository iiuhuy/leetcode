/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  // 找最小的，那就初始化为 1，找找找，找到适合的就退出循环～
  let result = 1;
  while (nums.includes(result)) {
    result++;
  }
  return result;
};
// @lc code=end
