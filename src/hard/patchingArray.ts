function minPatches(nums: number[], n: number): number {
  let patches = 0;
  let miss = 1;
  let i = 0;

  while (miss <= n) {
    if (i < nums.length && nums[i] <= miss) {
      miss += nums[i];
      i++;
    } else {
      miss += miss;
      patches++;
    }
  }

  return patches;
}

console.log(minPatches([1, 3], 6));
console.log(minPatches([1, 5, 10], 20));
console.log(minPatches([1, 2, 2], 5));

// https://leetcode.com/problems/patching-array/
