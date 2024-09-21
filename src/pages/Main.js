// src/pages/Home.js
import React from 'react';
import BlackCat from '../components/BlackCat';

const Main = () => {
  return (
    <div>
      <h1>How waste is managed in South Korea</h1>
      <BlackCat />
      <p style={{ fontSize: '1.2em' }}>I created this webpage to help foreign students understand how to properly separate and dispose of waste in South Korea.</p>
      <p style={{ fontSize: '1.2em' }}>Waste management practices can vary significantly from country to country, and it's important for newcomers to learn the local rules to contribute to a cleaner environment. </p>
      <p style={{ fontSize: '1.2em' }}>This site provides clear guidelines on the different types of waste, recycling procedures, and tips for responsible disposal, ensuring that everyone can participate in keeping our community clean and sustainable.</p>
    </div>
  );
};

export default Main;
