function longestSubarray(nums: number[], limit: number): number {
  const maxDeque: number[] = [];
  const minDeque: number[] = [];
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < nums.length; right++) {
    while (
      maxDeque.length &&
      nums[maxDeque[maxDeque.length - 1]] < nums[right]
    ) {
      maxDeque.pop();
    }
    maxDeque.push(right);

    while (
      minDeque.length &&
      nums[minDeque[minDeque.length - 1]] > nums[right]
    ) {
      minDeque.pop();
    }
    minDeque.push(right);

    while (nums[maxDeque[0]] - nums[minDeque[0]] > limit) {
      left++;
      if (left > minDeque[0]) {
        minDeque.shift();
      }
      if (left > maxDeque[0]) {
        maxDeque.shift();
      }
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(longestSubarray([8, 2, 4, 7], 4));
console.log(longestSubarray([10, 1, 2, 4, 7, 2], 5));
console.log(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0));

// https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit