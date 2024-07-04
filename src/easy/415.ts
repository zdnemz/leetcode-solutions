function addStrings(num1: string, num2: string): string {
  const sum = BigInt(num1) + BigInt(num2);
  return sum.toString();
}

console.log(addStrings("11", "123"));
console.log(addStrings("456", "77"));
console.log(addStrings("0", "0"));

// https://leetcode.com/problems/add-strings/
