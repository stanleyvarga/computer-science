import { maxSubArray_N2, maxSubArray_N } from "./max-subarray";
describe("Maximum Subarray", () => {
  it("find a maximum subarray - O(n^2) solution", () => {
    expect(maxSubArray_N2([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(maxSubArray_N2([1])).toBe(1);
    expect(maxSubArray_N2([-1])).toBe(-1);
    expect(maxSubArray_N2([5, 4, -1, 7, 8])).toBe(23);
  });
  it("find a maximum subarray - O(n)", () => {
    expect(maxSubArray_N([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(maxSubArray_N([1])).toBe(1);
    expect(maxSubArray_N([-1])).toBe(-1);
    expect(maxSubArray_N([5, 4, -1, 7, 8])).toBe(23);
  });
});
