function sortedSquares(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array(n);
  let left = 0;
  let right = n - 1;
  let pos = right;

  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[pos] = nums[left] * nums[left];
      left++;
    } else {
      result[pos] = nums[right] * nums[right];
      right--;
    }
    pos--;
  }

  return result;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));

// https://leetcode.com/problems/squares-of-a-sorted-array/
