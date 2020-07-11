/*
 * @lc app=leetcode.cn id=315 lang=javascript
 *
 * [315] 计算右侧小于当前元素的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  let n = 0;
  let result = [];
  if (nums.length === 0) return result;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        n++;
        continue;
      }
    }
    result.push(n);
    n = 0;
  }
  result.push(0);
  return result;
};
// @lc code=end
