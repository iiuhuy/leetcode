/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  // 1.LRU = 哈希表 + 双向链表
  // 初始化容量，用于判断 LRU 是否已满
  // 初始化哈希表映射，用于查找节点
  // 初始化双链表，用于插入、删除节点
  this.cap = capacity;
  this.map = new Map();
  this.cache = new DoubleList();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  // 如果哈希查找不存在，将此节点置于开头，为最近访问节点
  let map = this.map;

  if (!map.has(key)) {
    return -1;
  }
  let val = map.get(key).val;
  // 最近访问数据置前
  this.put(key, val);
  return val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let cache = this.cache;
  let map = this.map;
  let node = new Node(key, value);
  if (map.has(key)) {
    // 删除旧的节点，新的插到头部
    cache.remove(map.get(key));
  } else {
    if (this.cap == cache.size) {
      // 删除最后一个
      let last = cache.removeLast();
      map.delete(last.key);
    }
  }
  // 新增头部
  cache.addFirst(node);
  // 更新 map 映射
  map.set(key, node);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
// 链表节点
class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
  }
}
// 双链表
class DoubleList {
  // 初始化头、尾节点、链表最大容量
  constructor() {
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.size = 0;
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  // 在链表头部添加节点
  addFirst(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
    this.size++;
  }
  // 删除链表中存在的node节点
  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
  }
  // 删除链表中最后一个节点，并返回该节点
  removeLast() {
    // 链表为空
    if (this.tail.prev == this.head) {
      return null;
    }
    let last = this.tail.prev;
    this.remove(last);
    return last;
  }
}
