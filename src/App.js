import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { usePeople } from "./hooks-examples/custom";

function App() {
  let people = usePeople();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ul>
        {people && people.map(person => <li key={person.id}>{person.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
