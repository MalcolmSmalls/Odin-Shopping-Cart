import './App.css';
import React from "react"
import Home from "./Components/Home"
import Nav from "./Components/Nav"
import Shop from "./Components/Shop"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  const [ cart, setCart ] = React.useState(0)
  const [ count, setCount] = React.useState(0)


  function handleAdd(){
    setCount(prevCount => prevCount + 1)
  }

  function handleMinus(){
    setCount(prevCount => prevCount - 1)
  }

  function handleCart(){
    setCart(prevCart => prevCart + count )
  }

  return (
    <div>
      <BrowserRouter>
        <Nav items={cart} />
        <Routes>
          <Route path  = "/" element = {<Home />}/>
          <Route path = "/Shop/" element = {<Shop handleMinus={handleMinus} handleAdd={handleAdd} count={count} handleCart = {handleCart} />}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
