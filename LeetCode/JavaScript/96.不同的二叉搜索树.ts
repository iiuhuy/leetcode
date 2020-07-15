/*
 * @lc app=leetcode.cn id=96 lang=typescript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
function numTrees(n: number): number {
  const result: number[] = [1, ...Array(n).fill(0)];
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      result[i] += result[j] * result[i - 1 - j];
    }
  }
  return result[n];
}

// @lc code=end
