import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/Nav";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="app">
      {/* <Nav /> */}
      <BrowserRouter>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Nav />} />
        <Route path="/resume" element={<Resume />} />
        </Routes>
        </BrowserRouter>
        
      </div>
    
  );
}

export default App;
