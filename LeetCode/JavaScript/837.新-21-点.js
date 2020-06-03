/*
 * @lc app=leetcode.cn id=837 lang=javascript
 *
 * [837] 新21点
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
var new21Game = function (N, K, W) {
  // let dp = new Array(N + 1).fill(0); // dp 项：拿到分数 0-N 的概率
  // dp[0] = 1; // 没玩游戏，分数已经是 0，所以拿 0 分的概率是 1
  // for (let i = 1; i < N + 1; i++) {
  //   // 遍历 dp 数组 进行填表
  //   for (let j = i - W; j <= i - 1; j++) {
  //     // 遍历 W 区间:[i-W,i-1]
  //     if (j >= 0 && j + 1 <= K) {
  //       // 处理边界情况
  //       //j>=0 时 dp[j] 才有意义; 分数 i 要 <=K，所以 j+1 要 <=K
  //       dp[i] += (1 / W) * dp[j]; // 对 W 区间的概率进行累加
  //     }
  //   }
  // }
  // let result = 0;
  // for (let i = K; i <= N; i++) {
  //   // 分数落在 [K,N] 的概率
  //   result += dp[i]; // 条件概率累加
  // }
  // return result;
  let dp = new Array(N + 1).fill(0);
  dp[0] = 1;
  let windowSum = 0;
  for (let i = 1; i < N + 1; i++) {
    if (i - W - 1 >= 0) {
      // 甩掉的dp[i - W - 1]要存在呀
      windowSum -= dp[i - W - 1]; // 甩掉上一次window左端
    }
    if (i - 1 < K) {
      // 新纳入的dp[i - 1]要存在呀，分数i<=K，i-1<K
      windowSum += dp[i - 1]; // 纳入上一次window的右侧一项
    }
    dp[i] = windowSum * (1 / W);
  }
  let result = 0;
  for (let i = K; i <= N; i++) {
    result += dp[i];
  }
  return result;
};
// @lc code=end
