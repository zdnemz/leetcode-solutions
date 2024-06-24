function sortPeople(names: string[], heights: number[]): string[] {
  const n = names.length;

  const indexes = Array.from(Array(n).keys());

  indexes.sort((a, b) => heights[b] - heights[a]);

  const sortedNames = indexes.map((index) => names[index]);

  return sortedNames;
}

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]));

// https://leetcode.com/problems/sort-the-people/
