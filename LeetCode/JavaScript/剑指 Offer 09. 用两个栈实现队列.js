var CQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stack1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  // 一. 2 不为空,直接取
  if (this.stack2.length) return this.stack2.pop();
  // 二. 2 为空 循环1, 往2中继续添加元素
  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }
  return this.stack2.pop() || -1;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
