const peopleData = [
  { id: 1, name: "Ann", isOnline: true },
  { id: 2, name: "Sue", isOnline: true },
  { id: 3, name: "John" },
  { id: 4, name: "Jo" }
];

export const peopleService = {
  get: () => {
    return peopleData;
  }
};
