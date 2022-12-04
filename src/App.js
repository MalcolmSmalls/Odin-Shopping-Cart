import './App.css';
import React from "react"
import Home from "./Components/Home"
import Nav from "./Components/Nav"
import Shop from "./Components/Shop"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path  = "/" element = {<Home />}/>
          <Route path = "/Shop/" element = {<Shop />}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
