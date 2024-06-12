function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3, 2], 8));

// https://leetcode.com/problems/two-sum/
