/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

// src/App.js
// src/App.jsx
// src/App.jsx


import {Routes, Route} from "react-router-dom";
import HomePage from './components/HomePage.jsx';
import ProductDetails from "./components/ProductDetails.jsx";
import ProductList from "./components/ProductList.jsx";
import Header from "./components/Header.jsx"
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import "./styles/layouts.css"


function App() {
  return (
    
    <div>
      <div><Header/></div>
      
      <Routes> 
        <Route path="/" Component={HomePage}/>
        <Route path="/home" Component={HomePage}/>
        <Route path="/productlist" Component={ProductList}/>
        <Route path="/productdetails" Component={ProductDetails}/>
        <Route path="/register" Component={Register}/>
        <Route path="/login" Component={Login}/>
      </Routes>
    </div>
  );
}

export default App;



