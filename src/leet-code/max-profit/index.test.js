import { maxProfit } from "./max-profit";

describe("maxProfit", () => {
  it("should find a minimum number and return zero", () => {
    expect(maxProfit([9, 8, 7, 6, 5, 1])).toEqual(0);
    expect(maxProfit([1])).toBe(0);
    expect(maxProfit([2, 1])).toBe(0);
  });
  it("should find a profit value", () => {
    expect(maxProfit([2, 4, 1])).toEqual(2);
  });

  it("should find max profit when low is first", () => {
    expect(maxProfit([1, 2, 3, 4, 5, 6, 7])).toBe(6);
  });

  it("should return max profit when low is middle", () => {
    expect(maxProfit([5, 6, 7, 1, 2, 3, 4])).toBe(3);
  });

  it("should return max profit when low is before last", () => {
    // expect(maxProfit([3, 2, 6, 5, 0, 3])).toBe(3);
  });
});
