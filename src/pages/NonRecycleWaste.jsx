// src/pages/NonRecycleWaste.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NonRecycleWaste = () => {
  return (
    <div>
      <h1>Non-Recycle Waste Categories</h1>
      <div className="sub-sidebar">
        <Link to="/non-recycle-waste/general" style={{ textDecoration: 'none' }}>
          <div className="sub-menu-item">General Waste</div>
        </Link>
        <Link to="/non-recycle-waste/food" style={{ textDecoration: 'none' }}>
          <div className="sub-menu-item">Food Waste</div>
        </Link>
      </div>
    </div>
  );
};

export default NonRecycleWaste;
