/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  // 自带平方根(逃:)
  // return parseInt(Math.sqrt(x));
  // 二分查找
  if (x == 0 || x == 1) {
    return x;
  }
  var left = 1;
  var right = x;
  while (left <= right) {
    var middle = left + ((right - left) >> 1);
    if (middle * middle == x) {
      return middle;
    } else if (middle * middle > x) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return right;

  // 牛顿迭代法： 不断枚举，
};
// @lc code=end
