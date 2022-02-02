import { twoSum_N2, twoSum_N } from "./twoSum";

interface TestCase {
  nums: number[];
  target: number;
  expected: [number, number] | [];
}

describe("twoSum", () => {
  it("should return two-sum", () => {
    const expected: TestCase[] = [
      { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
      { nums: [3, 2, 4], target: 6, expected: [1, 2] },
      { nums: [3, 3], target: 6, expected: [0, 1] },
      { nums: [3], target: 6, expected: [] },
    ];

    expected.forEach(({ nums, target, expected }) => {
      [twoSum_N2, twoSum_N].forEach((fn) => {
        expect(fn(nums, target)).toEqual(expected);
      });
    });
  });
});
