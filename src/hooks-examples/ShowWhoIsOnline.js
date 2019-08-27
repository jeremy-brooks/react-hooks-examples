import { useMembers } from "./custom";
import React from "react";

export function ShowWhoIsOnline() {
  let members = useMembers();

  return (
    <ul>
      {members.map(member => (
        <li
          key={member.id}
          className={
            member.isOnline ? "alert alert-success" : "alert alert-primary"
          }
        >
          {member.name}
          {" is "}
          {member.isOnline ? "Online" : "Offline"}
        </li>
      ))}
    </ul>
  );
}
