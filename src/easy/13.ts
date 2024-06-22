function romanToInt(s: string): number {
  const roman: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let value = 0;
  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && roman[s[i]] < roman[s[i + 1]]) {
      value -= roman[s[i]];
    } else {
      value += roman[s[i]];
    }
  }

  return value;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));

// https://leetcode.com/problems/roman-to-integer/
