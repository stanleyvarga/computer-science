// https://leetcode.com/problems/maximum-subarray/

// Time Complexity: O(n^2)
// Space Complexity: O(1)
export function maxSubArray_N2(nums: number[]): number {
  let max = -Infinity;
  let sum;

  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (max < sum) {
        max = sum;
      }
    }
  }
  return max;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
export function maxSubArray_N(nums: number[]): number {
  let max = nums[0],
    localSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    localSum = Math.max(nums[i], nums[i] + localSum);
    max = Math.max(max, localSum);
  }
  return max;
}
