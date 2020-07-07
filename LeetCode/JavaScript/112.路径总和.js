/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  // 如果不存在，表示不是叶子节点
  if (!root) return false;
  // 如果是叶子节点，判断减去这个节点的值是否为 0
  if (!root.left && !root.right) return sum - root.val === 0;
  // 左右节点递归寻找一条存在的 pathSum
  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
};
// @lc code=end
