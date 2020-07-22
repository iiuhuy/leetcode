/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    // 二分法
    const temp = Math.floor(left + (right - left) / 2);
    if (numbers[temp] > numbers[right]) {
      left = temp + 1;
    } else if (numbers[temp] < numbers[right]) {
      right = temp;
    } else {
      right--;
    }
  }
  return numbers[left];
};
