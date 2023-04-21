import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import "./index.scss";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
