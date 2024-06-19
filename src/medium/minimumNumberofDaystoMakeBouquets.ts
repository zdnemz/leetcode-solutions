function minDays(bloomDay: number[], m: number, k: number): number {
  if (bloomDay.length < m * k) return -1;

  function canMakeBouquets(mid: number): boolean {
    let bouquets = 0,
      flowers = 0;
    for (let day of bloomDay) {
      if (day <= mid) {
        flowers++;
        if (flowers === k) {
          bouquets++;
          flowers = 0;
        }
      } else {
        flowers = 0;
      }
      if (bouquets >= m) return true;
    }
    return false;
  }

  let min = Math.min(...bloomDay);
  let max = Math.max(...bloomDay);
  let left = min,
    right = max;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (canMakeBouquets(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return canMakeBouquets(left) ? left : -1;
}
console.log(minDays([1, 10, 3, 10, 2], 3, 1));
console.log(minDays([1, 10, 3, 10, 2], 3, 2));
console.log(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3));

// https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets
