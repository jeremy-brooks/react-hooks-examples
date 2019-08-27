import React from "react";
import "./App.css";
import { DisplayNames } from "./hooks-examples/DisplayNames";
import { ShowWhoIsOnline } from "./hooks-examples/ShowWhoIsOnline";

function App() {
  return (
    <div className="App container">
      <h1>Show all the people</h1>
      <DisplayNames />

      <h1>Show who is online</h1>
      <ShowWhoIsOnline />
    </div>
  );
}

export default App;
