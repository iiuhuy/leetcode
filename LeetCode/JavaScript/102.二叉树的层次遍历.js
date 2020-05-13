/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  // DFS
  if (!root || root.length == 0) {
    return [];
  }
  var result = [];
  function dfs(currNode, level) {
    if (currNode != null) {
      !result[level] && (result[level] = []);
      result[level].push(currNode.val);
      if (currNode.left != null) {
        dfs(currNode.left, level + 1);
      }
      if (currNode.right != null) {
        dfs(currNode.right, level + 1);
      }
    }
  }
  dfs(root, 0);
  return result;
};
// @lc code=end
