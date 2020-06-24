/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length - 2; i++) {
    let a = i + 1;
    let b = nums.length - 1;

    for (; a < b; ) {
      const sum = nums[a] + nums[b] + nums[i]; // 三数之和
      if (Math.abs(target - sum) < Math.abs(target - result)) {
        result = sum;
      }
      if (sum < target) {
        a++;
      } else if (sum > target) {
        b--;
      } else {
        return target;
      }
    }
  }
  return result;
};
// @lc code=end
