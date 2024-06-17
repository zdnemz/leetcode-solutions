function judgeSquareSum(c: number): boolean {
  if (c < 0) {
    return false;
  }

  let a = 0;
  let b = Math.floor(Math.sqrt(c));

  while (a <= b) {
    let sumOfSquares = a * a + b * b;
    if (sumOfSquares === c) {
      return true;
    } else if (sumOfSquares < c) {
      a++;
    } else {
      b--;
    }
  }

  return false;
}

console.log(judgeSquareSum(5));
console.log(judgeSquareSum(3));

// https://leetcode.com/problems/sum-of-square-numbers/
