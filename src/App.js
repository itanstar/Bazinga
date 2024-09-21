import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Recycle from './pages/Recycle';
import Plastic from './pages/Plastic';
import Paper from './pages/Paper';
import Glass from './pages/Glass';
import NonRecycleWaste from './pages/NonRecycleWaste';
import GeneralWaste from './pages/GeneralWaste';
import FoodWaste from './pages/FoodWaste';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showRecycleSubmenu, setShowRecycleSubmenu] = useState(false);
  const [showNonRecycleSubmenu, setShowNonRecycleSubmenu] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleRecycleSubmenu = () => {
    setShowRecycleSubmenu(!showRecycleSubmenu);
  };

  const toggleNonRecycleSubmenu = () => {
    setShowNonRecycleSubmenu(!showNonRecycleSubmenu);
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
            <li onClick={toggleRecycleSubmenu}>
              <div className="menu-item">Recycle</div>
            </li>
            {showRecycleSubmenu && (
              <ul className="sub-menu">
                <li>
                  <Link to="/recycle/plastic" style={{ textDecoration: 'none' }}>
                    <div className="sub-menu-item">Plastic</div>
                  </Link>
                </li>
                <li>
                  <Link to="/recycle/paper" style={{ textDecoration: 'none' }}>
                    <div className="sub-menu-item">Paper</div>
                  </Link>
                </li>
                <li>
                  <Link to="/recycle/Glass" style={{ textDecoration: 'none' }}>
                    <div className="sub-menu-item">Glass</div>
                  </Link>
                </li>
              </ul>
            )}
            <li onClick={toggleNonRecycleSubmenu}>
              <div className="menu-item">Non Recycle Waste</div>
            </li>
            {showNonRecycleSubmenu && (
              <ul className="sub-menu">
                <li>
                  <Link to="/non-recycle-waste/general" style={{ textDecoration: 'none' }}>
                    <div className="sub-menu-item">General Waste</div>
                  </Link>
                </li>
                <li>
                  <Link to="/non-recycle-waste/food" style={{ textDecoration: 'none' }}>
                    <div className="sub-menu-item">Food Waste</div>
                  </Link>
                </li>
              </ul>
            )}
          </ul>
        </div>

        <div className="content">
          <button className="hamburger" onClick={toggleMenu}>
            &#9776; {/* 햄버거 아이콘 */}
          </button>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/recycle" element={<Recycle />} />
            <Route path="/recycle/plastic" element={<Plastic />} />
            <Route path="/recycle/paper" element={<Paper />} />
            <Route path="/recycle/Glass" element={<Glass />} />
            <Route path="/non-recycle-waste" element={<NonRecycleWaste />} />
            <Route path="/non-recycle-waste/general" element={<GeneralWaste />} />
            <Route path="/non-recycle-waste/food" element={<FoodWaste />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
