/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  const sum = A.reduce((r, n) => (r += n), 0);

  // 判断能否被整除
  if (sum % 3 !== 0) {
    return false;
  }

  const avg = sum / 3;
  let cur = 0;
  let count = 0;
  // 判断
  for (const a of A) {
    cur += a;
    if (cur === avg) {
      cur = 0;
      count++;
    }
  }
  return count >= 3;
};

// @lc code=end
