import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Plastic from './pages/Plastic';
import Paper from './pages/Paper';
import Glass from './pages/Glass';
import FoodWaste from './pages/FoodWaste';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className="app">
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="menu-item">Home</div>
            </Link>
          </li>
          <li>
            <Link to="/Plastic" style={{ textDecoration: 'none' }}>
              <div className="menu-item">Plastic🧴</div>
            </Link>
          </li>
          <li>
            <Link to="/Paper" style={{ textDecoration: 'none' }}>
              <div className="menu-item">Paper📜</div>
            </Link>
          </li>
          <li>
            <Link to="/Glass" style={{ textDecoration: 'none' }}>
              <div className="menu-item">Glass</div>
            </Link>
          </li>
          <li>
            <Link to="/FoodWaste" style={{ textDecoration: 'none' }}>
              <div className="menu-item">FoodWaste</div>
            </Link>
          </li>
        </ul>
      </div>


        <div className="content">
          <button className="hamburger" onClick={toggleMenu}>
            &#9776; {/* 햄버거 아이콘 */}
          </button>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Plastic" element={<Plastic />} />
            <Route path="/Paper" element={<Paper />} />
            <Route path="/Glass" element={<Glass />} />
            <Route path="/FoodWaste" element={<FoodWaste />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
