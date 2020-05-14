/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let size = nums.length,
    result = 0;

  if (!size) {
    return null;
  }

  for (let i = 0; i < size; i++) {
    result ^= nums[i];
  }

  return result;
};
// @lc code=end
