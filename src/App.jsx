import React from "react";
import DisplayItems from "./components/DisplayItems";
import AddItemBar from "./components/AddItemBar";
import Title from "./components/Title";

function App() {
  return (
    <div className="box-border bg-green-900 h-screen  text-white">
      <Title />
      <AddItemBar />
      <DisplayItems />
    </div>
  );
}

export default App;
