/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = function (nums1, nums2) {
  let len1 = nums1.length;
  let len2 = nums2.length;
  if (len1 == 0 && len2 == 0) {
    return;
  } else if (len1 == 0) {
    if (len2 == 1) {
      return nums2[0];
    }
    let middle = parseInt(len2 / 2);
    if (len2 % 2 == 0) {
      return (nums2[middle - 1] + nums2[middle]) / 2;
    } else {
      return nums2[middle];
    }
  } else if (len1 > len2) {
    return findMedianSortedArrays(nums2, nums1);
  }
  // 二分法
  let i = parseInt(len1 / 2);
  while (i >= 0) {
    let j = parseInt((len1 + len2 + 1) / 2) - i;
    if (i != 0 && i != len2 && nums1[i - 1] > nums2[j]) {
      i--;
    } else if (j != 0 && i != len1 && nums2[j - 1] > nums1[i]) {
      i++;
    } else {
      let maxLeft = 0;
      if (j == 0) {
        maxLeft = nums1[i - 1];
      } else if (i == 0) {
        maxLeft = nums2[j - 1];
      } else {
        maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
      }
      // 总和为奇数 maxLeft 即为所求中位数
      if ((len1 + len2) % 2 == 1) {
        return maxLeft;
      }

      let minRight = 0;
      if (j == len2) {
        minRight = nums1[i];
      } else if (i == len1) {
        minRight = nums2[j];
      } else {
        minRight = Math.min(nums1[i], nums2[j]);
      }
      return (maxLeft + minRight) / 2;
    }
  }
};
// @lc code=end
