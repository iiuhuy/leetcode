/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  // 1.接调库函数 O(1)
  // return Math.pow(x,n);  // 面试肯定不让这么写.

  // 2.暴力 O(n) 超时...
  // if (n === 0) {
  //     return 1
  // }
  // x = parseFloat(x);
  // if (n < 0) {
  //     x = parseFloat(1 / x);
  //     n = -n;
  // }
  // let element = x;
  // while (n > 1) {
  //     x *= element;
  //     n--;
  // }
  // return x

  // 3.分治  O(logn)
  if (n === 0) {
    return 1;
  }

  x = parseFloat(x);
  if (n < 0) {
    x = parseFloat(1 / x);
    n = -n;
  }
  let sub = x;
  let result = 1;
  for (let i = n; i > 0; i = parseInt(i / 2)) {
    if (i & (1 === 1)) {
      result = result * sub;
    }
    sub = sub * sub;
  }
  return result;
};
// @lc code=end
