/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) {
    return "[]";
  }

  let res = "";
  let node = root;
  const queue = [node];
  while (queue.length) {
    const front = queue.shift();
    if (front) {
      res += `${front.val},`;
      queue.push(front.left);
      queue.push(front.right);
    } else {
      res += "#,";
    }
  }

  res = res.substring(0, res.length - 1); // 去掉最后一个逗号

  return `[${res}]`;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data.length <= 2) {
    return null;
  }

  const nodes = data.substring(1, data.length - 1).split(",");
  const root = new TreeNode(parseInt(nodes[0]));
  nodes.shift();

  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    // 第一个是左节点，节点为空，直接跳过
    const leftVal = nodes.shift();
    if (leftVal !== "#") {
      node.left = new TreeNode(leftVal);
      queue.push(node.left);
    }
    // 第二个是右节点，节点为空，直接跳过
    const rightVal = nodes.shift();
    if (rightVal !== "#") {
      node.right = new TreeNode(rightVal);
      queue.push(node.right);
    }
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
