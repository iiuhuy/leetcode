/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * @return {number}
 */
var maxPathSum = function (root) {
  let result = -Infinity;
  let helper = function (node) {
    if (node == null) return 0;
    let leftVal = Math.max(helper(node.left), 0);
    let rightVal = Math.max(helper(node.right), 0);
    let newPath = node.val + leftVal + rightVal;
    result = Math.max(result, newPath);
    return node.val + Math.max(leftVal, rightVal);
  };
  helper(root);
  return result;
};
// @lc code=end
