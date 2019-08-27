import { usePeople, peopleData } from "./custom";
import { usePeopleService } from "./usePeopleService";
import { useState } from "react";

let mockState;

const mockUseState1 = initialState => {
  mockState = initialState;
  const setter = newState => {
    mockState = newState;
  };
  return [mockState, setter];
};

jest.mock("react", () => {
  return {
    useState: jest.fn(),
    useEffect: jest.fn()
  };
});

describe("Use people", () => {
  it("should return a list", () => {
    useState.mockImplementationOnce(mockUseState1);
    expect(Array.isArray(usePeople())).toBeTruthy();
    expect(usePeople()).toEqual([
      { id: 1, name: "Ann" },
      { id: 2, name: "Sue" },
      { id: 3, name: "John" },
      { id: 4, name: "Jo" }
    ]);
  });
});

it("should get a list of people from the people service", () => {
  expect(usePeopleService()).toBe(peopleData);
});
