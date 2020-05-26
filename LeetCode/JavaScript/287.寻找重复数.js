/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // 看题解: 龟兔法. emmm
  let tortoise = nums[0];
  let hare = nums[0];

  do {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
  } while (tortoise !== hare);

  hare = nums[0];
  while (tortoise !== hare) {
    hare = nums[hare];
    tortoise = nums[tortoise];
  }

  return tortoise;
};
// @lc code=end
