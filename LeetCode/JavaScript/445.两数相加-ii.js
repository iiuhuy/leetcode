/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const stack1 = [];
  const stack2 = [];
  const stack = [];

  let curried = 0;

  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  let a = null;
  let b = null;

  while (stack1.length > 0 || stack2.length > 0) {
    a = Number(stack1.pop()) || 0;
    b = Number(stack2.pop()) || 0;

    stack.push((a + b + curried) % 10);

    if (a + b + curried >= 10) {
      curried = 1;
    } else {
      curried = 0;
    }
  }

  if (curried === 1) {
    stack.push(1);
  }

  const dummy = {};

  let current = dummy;

  while (stack.length > 0) {
    current.next = {
      val: stack.pop(),
      next: null
    };

    current = current.next;
  }

  return dummy.next;
};
// @lc code=end
