import { useState, useEffect } from "react";
import React from "react";
import { peopleService } from "./usePeopleService";

export function useMembers() {
  let [people, setPeople] = useState([]);

  useEffect(() => {
    setPeople(peopleService.get());
  }, []);

  return people;
}

export function ShowWhoIsOnline() {
  let members = useMembers();

  return (
    <ul>
      {members.map(member => (
        <li
          key={member.id}
          style={{ color: member.isOnline ? "green" : "red" }}
        >
          {member.name}
          {" is "}
          {member.isOnline ? "Online" : "Offline"}
        </li>
      ))}
    </ul>
  );
}

export function DisplayNames() {
  let members = useMembers();

  return (
    <ul>
      {members.map(member => (
        <li key={member.id}>{member.name}</li>
      ))}
    </ul>
  );
}
