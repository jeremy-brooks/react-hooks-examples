import React from "react";
import "./App.css";
import { DisplayNames, ShowWhoIsOnline } from "./hooks-examples/custom";

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
