import './App.css';
import React from "react"
import Home from "./Components/Home"
import Nav from "./Components/Nav"
import Shop from "./Components/Shop"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  const [ cart, setCart ] = React.useState(0)


  return (
    <div>
      <BrowserRouter>
        <Nav items={cart} />
        <Routes>
          <Route path  = "/" element = {<Home />}/>
          <Route path = "/Shop/" element = {<Shop />}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
