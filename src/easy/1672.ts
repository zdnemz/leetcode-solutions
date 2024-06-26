function maximumWealth(accounts: number[][]) {
  let maxWealth = 0;

  for (let account of accounts) {
    let wealth = 0

    for (let i = 0; i < account.length; i++) {
      wealth += account[i];
    }
    
    if (wealth > maxWealth) {
      maxWealth = wealth;
    }
  }

  return maxWealth;
}

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);

// https://leetcode.com/problems/richest-customer-wealth/
