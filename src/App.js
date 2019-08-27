import React from "react";
import "./App.css";
import { DisplayNames } from "./hooks-examples/DisplayNames";
import { ShowWhoIsOnline } from "./hooks-examples/ShowWhoIsOnline";

function App() {
  return (
    <div className="App container">
      <h1>React Hooks examples</h1>
      <h2>Show all people</h2>
      <DisplayNames />

      <h2>Show who is online</h2>
      <ShowWhoIsOnline />
    </div>
  );
}

export default App;
