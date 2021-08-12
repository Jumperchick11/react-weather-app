import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Bethany Nixon and is{" "}
          <a
            href="https://github.com/Jumperchick11/react-weather-app"
            rel="noreferrer"
            target="_blank"
          >
            open-sourced on github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
