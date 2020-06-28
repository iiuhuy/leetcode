/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  // 两个指针：i,j (一次只动一个指针)
  // 1.i 不动，j 后移，直到 sum >= s, result = 4
  // 2.i 后移，j 不动，判断 sum 是否大于 s，是则缩小 result 否则重复步骤 1；result 为当前 result 值与上次比较较小的值。
  // 3.result 不能超过最大整数限度。
  const intmax = Number.MAX_SAFE_INTEGER;
  let i = 0,
    sum = 0,
    result = intmax;
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];
    while (sum >= s) {
      result = Math.min(result, j - i + 1);
      sum -= nums[i++];
    }
  }
  return result === intmax ? 0 : result;
};
// @lc code=end
