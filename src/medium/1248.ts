function numberOfSubarrays(nums: number[], k: number): number {
  let oddCount = 0;
  let result = 0;
  let prefixSums = new Array(nums.length + 1).fill(0);
  prefixSums[0] = 1;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] % 2 !== 0) {
      oddCount++;
    }

    if (oddCount >= k) {
      result += prefixSums[oddCount - k];
    }

    prefixSums[oddCount]++;
  }

  return result;
}

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));
