function findGCD(nums: number[]): number {
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  return gcd(min, max);

  function gcd(a: number, b: number): number {
    if (b === 0) return a;
    return gcd(b, a % b);
  }
}

console.log(findGCD([2, 5, 6, 9, 10]));
console.log(findGCD([7, 5, 6, 8, 3]));
console.log(findGCD([3, 3]));

// https://leetcode.com/problems/find-greatest-common-divisor-of-array/
