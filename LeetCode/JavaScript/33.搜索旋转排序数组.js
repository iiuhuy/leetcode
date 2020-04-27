/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let i = 0,
    j = nums.length - 1;

  for (; i <= j; ) {
    const mid = (i + j) >> 1;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] >= nums[i]) {
      if (target >= nums[i] && target < nums[mid]) {
        j = mid - 1;
      } else {
        i = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[j]) {
        i = mid + 1;
      } else {
        j = mid - 1;
      }
    }
  }
  return -1;
};
// @lc code=end
