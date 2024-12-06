import { describe, expect, it } from "vitest";
import { range } from "../utils";

describe("range function", () => {
  it("should create an array with integer steps", () => {
    expect(range(0, 5, 1)).toEqual([0, 1, 2, 3, 4]);
  });

  it("should create an array with larger steps", () => {
    expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8]);
  });

  it("should create an array with decimal steps", () => {
    expect(range(1, 3, 0.5)).toEqual([1, 1.5, 2, 2.5]);
  });

  it("should handle negative steps", () => {
    expect(range(5, 0, -1)).toEqual([5, 4, 3, 2, 1]);
  });
});
