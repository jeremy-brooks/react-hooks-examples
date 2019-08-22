import { usePeople } from "./custom";

describe("Use people", () => {
  it("should return a list", () => {
    expect(Array.isArray(usePeople())).toBeTruthy();
  });
});
