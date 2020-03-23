/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  // let length = 0;
  // for (let t = head; t;) {
  //     length++;
  //     t = t.next;
  // }
  // length = length >> 1;
  // let result = head;
  // while (length > 0) {
  //     result = result.next;
  //     length--;
  // }
  // return result;
  //

  let length = 0,
    newHead = head,
    result = [];
  while (newHead) {
    result[length++] = newHead;
    newHead = newHead.next;
  }
  return result[length >> 1];
};
// @lc code=end
middleNode([1, 2, 3, 4, 5]);
