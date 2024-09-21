// src/pages/Recycle.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Recycle = () => {
  return (
    <div>
      <h1>Recycle Categories</h1>
      <div className="sub-sidebar">
        <Link to="/recycle/plastic" style={{ textDecoration: 'none' }}>
          <div className="sub-menu-item">Plastic</div>
        </Link>
        <Link to="/recycle/paper" style={{ textDecoration: 'none' }}>
          <div className="sub-menu-item">Paper</div>
        </Link>
        <Link to="/recycle/Glass" style={{ textDecoration: 'none' }}>
          <div className="sub-menu-item">Glass</div>
        </Link>
      </div>
    </div>
  );
};

export default Recycle;
