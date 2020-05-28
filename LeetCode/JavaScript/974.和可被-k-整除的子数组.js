/*
 * @lc app=leetcode.cn id=974 lang=javascript
 *
 * [974] 和可被 K 整除的子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function (A, K) {
  let map = { 0: 1 }; // 为了让边界情况也能适用通式
  let preSumModK = 0; // 保存前缀和模 K 的结果，初始值：0模 K=0
  let result = 0; // 计数
  for (let i = 0; i < A.length; i++) {
    // 一次遍历做完所有事
    preSumModK = (preSumModK + A[i]) % K; // preSumModK 的递推关系
    if (preSumModK < 0) preSumModK += K; // 处理 preSum 为负数的情况，需要加 K
    if (map[preSumModK]) {
      // 之前存过的 与当前 preSum 相等的 key
      result += map[preSumModK]; // 把它出现的次数累加给 result
    }
    if (map[preSumModK]) {
      // 以前存过，出现次数 +1
      map[preSumModK]++;
    } else {
      // 新存入，初始值1
      map[preSumModK] = 1;
    }
  }
  return result; // 返回计数结果
};
// @lc code=end
