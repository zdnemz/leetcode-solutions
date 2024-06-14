function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  const str = String(x);

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(123321));

// https://leetcode.com/problems/palindrome-number/
