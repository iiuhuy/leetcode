/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  // 双指针
  let mergeTwoLists = (l1, l2) => {
    let preHead = new ListNode(-1);
    let preNode = preHead;
    while (l1 && l2) {
      if (l1.val <= l2.val) {
        preNode.next = l1;
        l1 = l1.next;
      } else {
        preNode.next = l2;
        l2 = l2.next;
      }
      preNode = preNode.next;
    }
    preNode.next = l1 ? l1 : l2;
    return preHead.next;
  };
  let n = lists.length;
  if (n == 0) return null;
  let res = lists[0];
  for (let i = 1; i < n; i++) {
    if (lists[i]) {
      res = mergeTwoLists(res, lists[i]);
    }
  }
  return res;
};

// @lc code=end
