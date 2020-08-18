/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  // 时间复杂度：O(n)O(n)。
  // 空间复杂度：O(logn)O(logn)。
  if (head == null) return null;
  let len = 0;
  let h = head; // h初始指向头结点
  while (head) {
    // 求链表的节点个数
    len++;
    head = head.next;
  }

  const buildBST = (start, end) => {
    if (start > end) return null; // 递归的出口，返回null节点
    const mid = (start + end) >>> 1; // 求mid，不是为了构建它，是为了分治
    const left = buildBST(start, mid - 1);
    const root = new TreeNode(h.val); // 按 h.val 构建节点

    h = h.next; // h指针步进
    root.left = left; // root构建出来了，接上左子树

    root.right = buildBST(mid + 1, end); // 构建当前root的右子树
    return root;
  };

  return buildBST(0, len - 1);
};
// @lc code=end
