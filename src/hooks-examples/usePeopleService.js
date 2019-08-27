const peopleData = [
  { id: 1, name: "Ann", isOnline: true },
  { id: 2, name: "Sue" },
  { id: 3, name: "John", isOnline: true },
  { id: 4, name: "Jo" }
];

export const peopleService = {
  get: () => {
    return peopleData;
  }
};
