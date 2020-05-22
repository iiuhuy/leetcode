/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // 1.递归
  if (!inorder.length) return null;
  let tmp = preorder[0],
    mid = inorder.indexOf(tmp);
  let result = new TreeNode(tmp);
  result.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  result.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return result;
};
// @lc code=end
