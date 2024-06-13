function lengthOfLongestSubstring(s: string): number {
  let max: number = 0;
  let start: number = 0;
  let seen: { [key: string]: number } = {};

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    if (seen[char] !== undefined && seen[char] >= start) {
      start = seen[char] + 1;
    }

    seen[char] = end;
    max = Math.max(max, end - start + 1);
  }

  return max;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));

// https://leetcode.com/problems/longest-substring-without-repeating-characters/