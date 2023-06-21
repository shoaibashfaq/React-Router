import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Debits from "./components/Debits";
import Credits from "./components/Credits";

function App() {
  const [credits,setCredit]=useState(0);
  const [debits,setDebit]=useState(0);
  

  function updateDebit(amount){
    setDebit(amount);
  }
  
  

  function updateCredit(amount){
    setCredit(amount);
  }

  return (
    <Router>
      <div className="App">
        <header>
          <h1 className="main-heading">Persue Bank Account</h1>
        </header>
        {/* Navigation */}
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/debits">Debits</Link>
            </li>
            <li>
            <Link to="/credits">Credits</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />

          {/* What Does The Wild Card Do? */}
          <Route path="/debits/*" element={<Debits setValue={updateDebit} tDC={credits-debits}></Debits>} />

          <Route path="/credits/*" element={<Credits setValue={updateCredit} tDC={credits-debits}></Credits>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
