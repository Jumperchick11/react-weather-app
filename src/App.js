import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Bethany Nixon and is{" "}
          <a
            href="https://github.com/Jumperchick11/react-weather-app"
            rel="noreferrer"
            target="_blank"
          >
            open-sourced on github
          </a>{" "}
          and{" "}
          <a
            href="https://heuristic-mestorf-bf304f.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
