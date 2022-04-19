import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";

import "./App.css";

function App() {
 return (
  <div className="App">
   <Router>
    <Routes>
     <Route path="/" element={<Home />}></Route>
    </Routes>
   </Router>
  </div>
 );
}

export default App;
