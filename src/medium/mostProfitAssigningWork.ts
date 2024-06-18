function maxProfitAssignment(
  difficulty: number[],
  profit: number[],
  worker: number[]
): number {
  let jobs: Array<[number, number]> = difficulty.map((d, i) => [d, profit[i]]);
  jobs.sort((a, b) => a[0] - b[0]);

  worker.sort((a, b) => a - b);

  let maxProfit = 0;
  let totalProfit = 0;
  let jobIndex = 0;
  let n = jobs.length;

  for (let w of worker) {
    while (jobIndex < n && w >= jobs[jobIndex][0]) {
      maxProfit = Math.max(maxProfit, jobs[jobIndex][1]);
      jobIndex++;
    }
    totalProfit += maxProfit;
  }

  return totalProfit;
}

console.log(
  maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7])
);

console.log(maxProfitAssignment([85, 47, 57], [24, 66, 99], [40, 25, 25]));
