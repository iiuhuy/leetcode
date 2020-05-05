/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function(root) {
  let stack = [];
  let inorder = -Infinity;

  while (stack.length || root !== null) {
    for (; root !== null; ) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
    if (root.val <= inorder) return false;
    inorder = root.val;
    root = root.right;
  }
  return true;
};
// @lc code=end
