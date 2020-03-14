/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 做 dp位置不能变化  复杂度: O(n^2)
// 1.dp 状态 :[i] 从头->i 元素: 最长子序列的长度
// 2
var lengthOfLIS = function(nums) {
  if (nums.length <= 1) {
    return nums.length;
  }

  const dp = [1];
  let result = 0;
  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    result = Math.max(result, dp[i]);
  }
  return result;
};

// 二分查找:  O (n log n)
// @lc code=end
