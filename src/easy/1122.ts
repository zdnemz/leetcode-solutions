function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const arr2Map = new Map<number, number>();
  for (let i = 0; i < arr2.length; i++) {
    arr2Map.set(arr2[i], i);
  }

  const part1: number[] = [];
  const part2: number[] = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2Map.has(arr1[i])) {
      part1.push(arr1[i]);
    } else {
      part2.push(arr1[i]);
    }
  }

  part1.sort((a, b) => arr2Map.get(a)! - arr2Map.get(b)!);
  part2.sort((a, b) => a - b);

  return [...part1, ...part2];
}

console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]));
console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]));

// https://leetcode.com/problems/relative-sort-array/
