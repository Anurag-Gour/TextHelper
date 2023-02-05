import "./App.css";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
      <div>
        <Routes>
          <Route path='/' element={<Navbar mode={mode} toggleMode={toggleMode} />} />
          <Route path='/home' element={<Navbar mode={mode} toggleMode={toggleMode} />} />
          <Route path='/about' element={<About mode={mode} toggleMode={toggleMode} />} />
        </Routes>
      </div>
  );
}

export default App;
