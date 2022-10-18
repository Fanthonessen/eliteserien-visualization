import React from "react";
import "./App.css";
import TeamList from "./components/pages/TeamList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <TeamList />
    </div>
  );
}

export default App;
