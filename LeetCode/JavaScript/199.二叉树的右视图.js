/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) return [];
  let arr = [];
  function dfs(root, step, res) {
    if (root) {
      if (res.length === step) {
        res.push(root.val); // 当数组长度等于当前 深度 时, 把当前的值加入数组
      }
      // console.log(step, '-------', res)
      dfs(root.right, step + 1, res); // 先从右边开始, 当右边没了, 再轮到左边
      dfs(root.left, step + 1, res);
    }
  }

  dfs(root, 0, arr);

  return arr;
};
console.log(rightSideView([1, 2, 3, null, 5, null, 4]));
// @lc code=end
