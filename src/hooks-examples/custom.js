import { useState, useEffect } from "react";
import { peopleService } from "./peopleService";

export function useMembers() {
  let [people, setPeople] = useState([]);

  useEffect(() => {
    setPeople(peopleService.get());
  }, []);

  return people;
}
