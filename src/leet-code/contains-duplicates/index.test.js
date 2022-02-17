import { containsDuplicate } from "./contains-duplicates";

describe("Contains Duplicates", () => {
  it("should contain duplicates", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });
  it("should not contains duplicates", () => {
    expect(containsDuplicate([1, 4, 6, 2, 3])).toBe(false);
  });
});
