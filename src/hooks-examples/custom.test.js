import React from "react";
import { useMembers } from "./custom";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

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
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const WrapperToTestHook = ({ hookCallback }) => {
  hookCallback();
  return null;
};

const testHook = callback => {
  render(<WrapperToTestHook hookCallback={callback} />, container);
};

describe("Use members", () => {
  it("should return a list", () => {
    let members;

    act(() => {
      testHook(() => (members = useMembers()));
    });

    expect(members).toEqual(mockData);
  });
});
