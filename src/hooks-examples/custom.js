import { useState, useEffect } from "react";

export const peopleData = [
  { id: 1, name: "Ann" },
  { id: 2, name: "Sue" },
  { id: 3, name: "John" },
  { id: 4, name: "Jo" }
];

export function usePeople() {
  return peopleData;
}
