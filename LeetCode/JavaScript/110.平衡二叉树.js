/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let isBlanceTree = true;
  let maxHeight = (r) => {
    if (!r) return 0;
    let left = maxHeight(r.left);
    let right = maxHeight(r.right); // dfs 常规操作，求出左右子树的高度

    if (Math.abs(left - right) > 1) {
      isBlanceTree = false; // 高度差超过 1 时，非平衡二叉树
    }
    return Math.max(left, right) + 1; // 要把父节点高度算进去
  };
  maxHeight(root);
  return isBlanceTree;
};
// @lc code=end
