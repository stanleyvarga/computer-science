import { maxProfit_N2, maxProfit_N } from "./max-profit";

describe("maxProfit", () => {
  it("should find a minimum number and return zero", () => {
    // expect(maxProfit_N2([9, 8, 7, 6, 5, 1])).toEqual(0);
    // expect(maxProfit_N2([1])).toBe(0);
    // expect(maxProfit_N2([2, 1])).toBe(0);
    // expect(maxProfit_N2([3, 2, 6, 5, 0, 3])).toBe(3);
    // expect(maxProfit_N2([2, 4, 1])).toEqual(2);
    // expect(maxProfit_N2([5, 6, 7, 1, 2, 3, 4])).toBe(3);
    // expect(maxProfit_N2([1, 2, 3, 4, 5, 6, 7])).toBe(6);
    // expect(maxProfit_N2([9, 8, 7, 6, 5, 1])).toEqual(0);

    expect(maxProfit_N([9, 8, 7, 6, 5, 1])).toEqual(0);
    expect(maxProfit_N([1])).toBe(0);
    expect(maxProfit_N([2, 1])).toBe(0);
    expect(maxProfit_N([3, 2, 6, 5, 0, 3])).toBe(3);
    expect(maxProfit_N([2, 4, 1])).toEqual(2);
    expect(maxProfit_N([2, 4, 3, 2, 1])).toEqual(2);
    expect(maxProfit_N([5, 6, 7, 1, 2, 3, 4])).toBe(3);
    expect(maxProfit_N([1, 2, 3, 4, 5, 6, 7])).toBe(6);
  });
});
