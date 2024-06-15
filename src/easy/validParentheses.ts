function isValid(s: string): boolean {
  if (s.length % 2 !== 0) {
    return false;
  }

  const bracketMap: { [key: string]: string } = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char in bracketMap) {
      const topElement = stack.length === 0 ? "#" : stack.pop();
      if (topElement !== bracketMap[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));

// https://leetcode.com/problems/valid-parentheses/
