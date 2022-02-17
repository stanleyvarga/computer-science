// https://leetcode.com/problems/contains-duplicate/submissions/
export function containsDuplicate(nums: number[]): boolean {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    }
    map.set(nums[i], nums[i]);
  }
  return false;
}

export function containsDuplicate_Set(nums: number[]): boolean {
  const S = new Set(nums);
  return S.size !== nums.length;
}
