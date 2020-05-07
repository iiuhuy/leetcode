/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一个树的子树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  // 1.题解中看到的答案
  // return JSON.stringify(s).includes(JSON.stringify(t));
  // ------ //
  // 2.
  // -> 1.遍历 s 的所有节点，看那个节点和 t 的根节点相等
  // -> 2.相等则继续遍历下去，匹配余下节点，知道 t 树遍历完
  if (!s && t) {
    return false;
  }
  let linkNode = function(n, target) {
    if (!n && target) return false;
    if (n && !target) return false;
    if (!n && !target) return true;
    if (n.val === target.val) {
      return linkNode(n.left, target.left) && linkNode(n.right, target.right);
    } else {
      return false;
    }
  };
  return linkNode(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};
// @lc code=end
