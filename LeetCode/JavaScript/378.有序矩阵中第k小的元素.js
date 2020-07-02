/*
 * @lc app=leetcode.cn id=378 lang=javascript
 *
 * [378] 有序矩阵中第K小的元素
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  /**
   * @param {number[][]} matrix
   * @param {number} k
   * @return {number}
   */
  if (matrix.length < 1) return 0;
  let arr = matrix.reduce((a, b) => merge(a, b));
  return arr[k - 1];
};
function merge(left, right) {
  let llen = left.length;
  let rlen = right.length;
  let i = 0;
  let j = 0;
  let res = [];
  while (i < llen && j < rlen) {
    if (left[i] < right[j]) {
      res.push(left[i++]);
    } else {
      res.push(right[j++]);
    }
  }
  while (i < llen) res.push(left[i++]);
  while (j < rlen) res.push(right[j++]);
  return res;
}
// @lc code=end
