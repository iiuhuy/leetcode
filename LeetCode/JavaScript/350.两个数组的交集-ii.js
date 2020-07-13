/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // 1.indexOf 检查是否存在另一个数组
  // 遍历其中一个数组 nums1 在另外一个数组 nums2 红检查是否存在该元素
  // 存在放入结果中，并在 nums2 中清除
  // 不存在则不作任何操作;
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    const index = nums2.indexOf(nums1[i]);
    if (index > -1) {
      result.push(nums1[i]);
      nums2.splice(index, 1);
    }
  }
  return result;
  // 2.哈希表记录元素出现个数
  // 利用 map 记录较短数组中每个数组出现的次数
  // 遍历较长数组到 map 中检查这个数组是否在 map 中且遇到次数不为 0
  // 次数大于 0，存放到结果数组中，且更新 map 中统计的个数
  // 小于等 0，则这个数字在较短数组没出现
  if (nums1.length > nums2.length) {
    return intersect(nums2, nums1);
  }
  let map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    let count = (map.get(nums1[i]) || 0) + 1;
    map.set(nums1[i], count);
  }
  let result = [];
  for (let i = 0; i < nums2.length; i++) {
    let count = map.get(nums2[i]) || 0;
    if (count > 0) {
      result.push(nums2[i]);
      map.set(nums2[i], count - 1);
    }
  }
  return result;

  // 3.排序优化循环
  // 先对两个数组排序优化循环
  // 从零遍历两个数组，比较两个数组不用指针下的元素大小
  // 其中一个数组当前指针下数字小，则后移指针去查询到比另外一个数组指针下等于小于其的数
  // 两数相同记录到结果中切两个指针同时后移
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let len1 = nums1.length,
    len2 = nums2.length,
    result = [],
    i = 0,
    j = 0,
    index = 0;
  while (i < len1 && j < len2) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      result[index] = nums1[i];
      i++;
      j++;
      index++;
    }
  }
  return result;
};
// @lc code=end
