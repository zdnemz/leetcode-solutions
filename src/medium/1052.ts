function maxSatisfied(
  customers: number[],
  grumpy: number[],
  minutes: number
): number {
  let satisfiedWithoutTechnique = 0;

  for (let i = 0; i < grumpy.length; i++) {
    if (grumpy[i] === 0) {
      satisfiedWithoutTechnique += customers[i];
    }
  }

  let additionalSatisfied = 0;
  let maxAdditionalSatisfied = 0;

  for (let i = 0; i < minutes; i++) {
    if (grumpy[i] === 1) {
      additionalSatisfied += customers[i];
    }
  }

  maxAdditionalSatisfied = additionalSatisfied;

  for (let i = minutes; i < grumpy.length; i++) {
    if (grumpy[i] === 1) {
      additionalSatisfied += customers[i];
    }
    if (grumpy[i - minutes] === 1) {
      additionalSatisfied -= customers[i - minutes];
    }
    maxAdditionalSatisfied = Math.max(
      maxAdditionalSatisfied,
      additionalSatisfied
    );
  }

  return satisfiedWithoutTechnique + maxAdditionalSatisfied;
}

console.log(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3));
console.log([1], [0], 1);

// https://leetcode.com/problems/grumpy-bookstore-owner/description/?envType=daily-question&envId=2024-06-21
