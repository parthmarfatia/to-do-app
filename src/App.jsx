import React from "react";
import DisplayItems from "./components/DisplayItems";
import AddDeleteBar from "./components/AddDeleteBar";
import Title from "./components/Title";

function App() {
  return (
    <div className="box-border bg-green-900 h-screen text-white">
      <Title />
      <AddDeleteBar />
      <DisplayItems />
    </div>
  );
}

export default App;
