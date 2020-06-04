/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const output = [];
  let k = 1;

  for (let i = 0; i < nums.length; i++) {
    output[i] = k;
    k = k * nums[i];
  }
  console.log(output);

  k = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= k;
    k *= nums[i];
  }

  return output;
};
productExceptSelf([1, 2, 3, 4]);
// @lc code=end
