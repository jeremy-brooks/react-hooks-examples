import React from "react";
import { useMembers } from "./custom";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import { HookTestWrapper } from "./hookTestWrapper";
import { setupTestContainer, teardownTestContainer } from "./setupAndTeardown";

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

beforeEach(() => {
  container = setupTestContainer();
});

afterEach(() => {
  teardownTestContainer(container);
});

describe("Use members", () => {
  it("should return a list of members", () => {
    let members;

    act(() => {
      render(
        <HookTestWrapper hookCallback={() => (members = useMembers())} />,
        container
      );
    });

    expect(members).toEqual(mockData);
  });
});
