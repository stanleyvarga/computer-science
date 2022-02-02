import { maxProfit } from "./max-profit";

describe("maxProfit", () => {
  it("should find a minimum number and return zero", () => {
    expect(maxProfit([9, 8, 7, 6, 5, 1])).toEqual(0);
  });
  it("should find a profit value", () => {
    expect(maxProfit([9, 8, 7, 6, 5, 1, 5, 5, 2, 3, 8])).toEqual(7);
    expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);

    // Explaination:
    // buying for two, selling for 4
    expect(maxProfit([2, 4, 1])).toEqual(2);
  });
});
