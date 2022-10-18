import React from "react";
import "./App.css";
import TeamList from "./pages/TeamList";
import { Route, Routes } from "react-router-dom";
import Matches from "./pages/Matches";

function App() {
  return (
    <div className="App">
      <TeamList />
    </div>
  );
}

export default App;
