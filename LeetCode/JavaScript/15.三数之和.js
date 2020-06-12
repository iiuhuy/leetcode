/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 然后就回到了 两数之和为one 的情况了
  let map = new Map();
  for (let j = i + 1; j < nums.length; j++) {
    let two = one - nums[j];
    // 去除重复情况
    if (result.length > 0) {
      let res1 = result[result.length - 1][1];
      let res2 = result[result.length - 1][2];
      if (res1 === two && res2 === nums[j]) {
        continue;
      }
    }
    if (map.has(two)) {
      result.push([nums[i], two, nums[j]]);
    } else {
      map.set(nums[j], j);
    }
  }
};
// @lc code=end
