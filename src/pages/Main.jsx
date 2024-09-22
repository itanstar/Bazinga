// src/pages/Home.js
import React from 'react';
import BlackCat from '../components/BlackCat';
import PageWrapper from '../components/PageWrapper';

const Main = () => {
  return (
    <PageWrapper>
      <h1>How waste is managed in South Korea</h1>
      <img src="\MainPic.png" alt="Main Pic" width="650" height="500" />
      <p style={{ fontSize: '1.2em' }}>This webpage is for helping foreigners understand how to properly separate and dispose of waste in Daegu, South Korea.</p>
      <p style={{ fontSize: '1.2em' }}>Waste management practices can vary significantly from country to country, and it's important for newcomers to learn the local rules to contribute to a cleaner environment.</p>
      <p style={{ fontSize: '1.2em' }}>This site provides clear guidelines on the different types of waste, recycling procedures, and tips for responsible disposal, ensuring that everyone can participate in keeping our community clean and sustainable!</p>
    </PageWrapper>
  );
};

export default Main;
