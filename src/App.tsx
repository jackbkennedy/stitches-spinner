import React from "react";
import "./App.css";
import { Spinner } from "./Spinner";

function App() {
  return (
    <div className="App">
      <Spinner size={1} thickness={2} color="red" />
      <Spinner size={2} thickness={3} color="blue" />
      <Spinner size={3} thickness={4} color="green" />
      <Spinner size={4} thickness={2} color="purple" />
    </div>
  );
}

export default App;
