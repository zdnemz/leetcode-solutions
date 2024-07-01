function threeConsecutiveOdds(arr: number[]): boolean {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      count++;
      if (count === 3) {
        return true;
      }
    } else {
      count = 0;
    }
  }

  return false;
}

console.log(threeConsecutiveOdds([2, 6, 4, 1]));
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));

// https://leetcode.com/problems/three-consecutive-odds
