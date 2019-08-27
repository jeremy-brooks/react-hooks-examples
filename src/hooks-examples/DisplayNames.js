import { useMembers } from "./custom";
import React from "react";

export function DisplayNames() {
  let members = useMembers();

  return (
    <ul>
      {members.map(member => (
        <li className="alert alert-primary" key={member.id}>
          {member.name}
        </li>
      ))}
    </ul>
  );
}
