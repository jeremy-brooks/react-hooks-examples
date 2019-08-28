import React from "react";
import { useMembers } from "./custom";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import { HookTestWrapper } from "./hookTestWrapper";
import { setupTestContainer, teardownTestContainer } from "./testContainer";

const mockData = [
  { id: 1, name: "Ann", isOnline: true },
  { id: 3, name: "Jeremy" }
];

jest.mock("./peopleService", () => {
  return {
    peopleService: {
      get: () => mockData
    }
  };
});

let container = null;
let members;

beforeEach(() => {
  container = setupTestContainer();
  act(() => {
    render(
      <HookTestWrapper hookCallback={() => (members = useMembers())} />,
      container
    );
  });
});

afterEach(() => {
  teardownTestContainer(container);
});

describe("Use members", () => {
  it("should return an iterable thing", () => {
    expect(Array.isArray(members)).toBeTruthy();
  });

  it("should return a list of members", () => {
    expect(members).toEqual(mockData);
  });
});
