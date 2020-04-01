/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  // 直接 sort 排序
  return nums.sort(function compare(a, b) {
    return a - b;
  });

  // 冒泡排序
  //     if(nums==null||nums.length<2){
  //         return nums;
  //     }
  //    for(var i = nums.length-1;i>0;i--){
  //        for(j = 0;j<i;j++){
  //            if(nums[j]>nums[j+1]){
  //                var temp = nums[j];
  //                nums[j] = nums[j+1];
  //                nums[j+1] = temp;
  //            }
  //        }
  //    }
  //    return nums;

  // 堆排

  // 归并排序
};
// @lc code=end
